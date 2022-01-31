import { hash } from 'bcrypt';
import { checkEmptyValue, confirmPassword, validateEmail } from '../utils/validations';
import User from '../models/User';

const index = async (req, res) => {
    res.send('User index');
};

const show = async (req, res) => {
    res.send('User show');
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

    return res.json({ id: userId });
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

export default { index, show, create, edit, update, remove };
