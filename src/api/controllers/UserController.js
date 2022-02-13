import { hash, compare } from 'bcrypt';
import { checkEmptyValue, isEmpty, hasValueMinLength, confirmPassword, validateEmail } from '../utils/validations';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import UserModel from '../models/User';
import ImageModel from '../models/Image';

const User = new UserModel();
const Image = new ImageModel();

const index = async (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (error, user) => {
        if (error)
            return next(error);

        return res.send({ user });
    })(req, res);
};

const show = async (req, res) => {
    const userData = await User.findById(req.params.id);
    
    if (!userData) throw new Error("Usuário não encontrado!");

    const { id, image_id, email, name, about } = userData;

    const user = {
        id,
        image_id,
        email,
        name,
        about
    };

    return res.send(user);
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

    if(!isEmpty(about)) {
        if (hasValueMinLength(about, 40)) {
            user.about = about;
        } else {
            throw new Error("O campo Sobre deve conter pelo menos 40 caracteres!");
        }
    }

    if (!isEmpty(oldPassword) && hasValueMinLength(oldPassword, 6)) {
        await User.findById(user.id).then(async (user) => {
            if (!(await compare(oldPassword, user.password)))
                throw new Error("Senha atual inválida!");
        });

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
            .then((user) => {
                if (!user)
                    return next(new Error("Autenticação falhou!"));

                return next(null, {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    imageId: user.image_id,
                    about: user.about
                });
            }).catch((error) => {
                return next(error);
            });
    }
));

export default { index, show, create, edit, remove };
