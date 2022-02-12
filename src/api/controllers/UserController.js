import { hash } from 'bcrypt';
import { checkEmptyValue, confirmPassword, validateEmail } from '../utils/validations';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import UserModel from '../models/User';

const User = new UserModel();

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
    res.send('User edit');
};

const update = async (req, res) => {
    res.send('User update');
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

export default { index, show, create, edit, update, remove };
