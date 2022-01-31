import { compare } from 'bcrypt';
import { checkEmptyValue, validateEmail } from '../utils/validations';
import { Strategy } from 'passport-local';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const LocalStrategy = Strategy;
const authUserSecret = "Fa2VjVaQL8";

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, next) => {
        await User.findByEmail(email)
            .then(async (user) => {
                if (!user)
                    return next(new Error("E-mail não cadastrado!"));

                if (!(await compare(password, user.password)))
                    return next(new Error("Senha inválida!"));

                return next(null, user);
            }).catch((error) => {
                return next(error);
            });
    }
));

function signUserToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email
    }, authUserSecret);
}

const login = async (req, res, next) => {
    for (let key of Object.keys(req.body)) {
        checkEmptyValue(req.body[key]);
    }

    validateEmail(req.body.email);

    passport.authenticate('local', { session: false }, (error, user) => {
        if (error)
            return next(error);

        if (user) {
            const token = signUserToken(user);
            return res.json({ token });
        }
    })(req, res);
};

const logout = (req, res) => {
    res.send('User index');
};


const forgot = (req, res) => {
    res.send('User create');
};

const reset = (req, res) => {
    res.send('User reset');
};

export default { login, logout, forgot, reset };
