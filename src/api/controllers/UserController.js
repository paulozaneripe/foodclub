import { hash, compare } from 'bcrypt';
import { checkEmptyValue, isEmpty, hasValueMinLength, confirmPassword, validateEmail } from '../utils/validations';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import s3 from '../config/awsS3';
import UserModel from '../models/User';
import ImageModel from '../models/Image';
import RecipeModel from '../models/Recipe';

const User = new UserModel();
const Image = new ImageModel();
const Recipe = new RecipeModel();

const index = async (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (error, user) => {
        if (error)
            return next(error);

        return res.send({ user });
    })(req, res);
};

const show = async (req, res) => {
    const user = await User.findById(req.params.id);
    
    if (!user) throw new Error("Usuário não encontrado!");

    const recipes = await Recipe.listByUserId(req.params.id);

    if (recipes.length > 0) {
        const recipesPromise = recipes.map(async recipe => {
            const images = await Recipe.getImagesById(recipe.id);
    
            if (images.length > 0) 
                recipe.image_url = images[0].url;
    
            return recipe;
        });

        const allUserRecipes = await Promise.all(recipesPromise);
        user.recipes = allUserRecipes;
    }

    return res.send(user);
};

const list = async (req, res) => {   
    let users = await User.list();
    
    return res.send(users);
};

const recipes = async (req, res) => {   
    const recipes = await Recipe.listByUserId(req.params.id);

    const recipesPromise = recipes.map(async recipe => {
        const images = await Recipe.getImagesById(recipe.id);

        if (images.length > 0) 
            recipe.image_url = images[0].url;

        return recipe;
    });
    
    const allRecipes = await Promise.all(recipesPromise);
    return res.send(allRecipes);
};

const create = async (req, res) => {
    for (let key of Object.keys(req.body)) {
        checkEmptyValue(req.body[key]);
    }

    const { email, name, password, repeatedPassword } = req.body;

    validateEmail(email);

    if (await User.findByEmail(email)) {
        throw new Error("E-mail já registrado!");
    }

    confirmPassword(password, repeatedPassword);

    const hashedPassword = await hash(password, 10);

    const user = {
        email: email,
        name: name,
        password: hashedPassword
    };

    const userId = await User.create(user);

    return res.send({ id: userId });
};

const edit = async (req, res) => {
    const { name, about, oldPassword, password, repeatedPassword } = req.body;

    const user = await User.findById(req.params.id);
    
    if (!user) throw new Error("Usuário não encontrado!");

    if (!isEmpty(name)) {
        user.name = name;
    }

    user.about = about;

    if (!isEmpty(oldPassword) && hasValueMinLength(oldPassword, 6)) {
        if (!(await compare(oldPassword, user.password)))
            throw new Error("Senha atual inválida!");

        if (oldPassword === password)
            throw new Error("A nova senha deve ser diferente da anterior!");

        const passwords = {
            oldPassword,
            password, 
            repeatedPassword
        };

        for (let key of Object.keys(passwords)) {
            if (isEmpty(passwords[key]))
                throw new Error("É necessário todos os campos de senha preenchidos!");

            if (!hasValueMinLength(passwords[key], 6)) {
                throw new Error("Os campos de senha devem ter um mínimo de 6 caracteres!");
            }
        }
    
        confirmPassword(password, repeatedPassword);

        const hashedPassword = await hash(password, 10);

        user.password = hashedPassword;
    }

    if (!isEmpty(req.file)) {
        const avatarUrl = req.file.location;
        let imageId = user.image_id;

        if (isEmpty(imageId)) {
            imageId = await Image.create(avatarUrl);
            user.image_id = imageId;
        } else {
            const key = user.avatar_url.split('/').pop();
            
            s3.deleteObject({ Bucket: process.env.AWS_BUCKET_NAME, Key: key }, (error, data) => {
                if (error) throw new Error(error);
                console.log(data);
            });

            await Image.update({ id: imageId, url: avatarUrl });
        }
    }
    
    const userId = await User.update(user);

    return res.send({ id: userId });
};

const remove = async (req, res) => {
    res.send('User remove');
};

passport.use(new passportJwt.Strategy(
    {
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET_KEY
    },
    async (jwtPayload, next) => {
        await User.findByEmail(jwtPayload.email)
            .then(async (user) => {
                if (!user)
                    return next(new Error("Autenticação falhou!"));

                if (user.image_id) {
                    const image = await Image.findById(user.image_id);
                    user.avatar_url = image.url;
                }

                const { id, avatar_url, name } = user; 

                return next(null, {
                    id,
                    avatar_url,
                    name
                });
            }).catch((error) => {
                return next(error);
            });
    }
));

export default { index, show, list, recipes, create, edit, remove };
