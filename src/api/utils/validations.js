import { validate } from 'isemail';

const checkEmptyValue = (value) => {
    if (value === "" || !value.replace(/\s/g, '').length)
        throw new Error("Por favor, preencha todos os campos!");
};

const confirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword)
        throw new Error("As senhas não coincidem!");
};

const validateEmail = (email) => {
    if(validate(email, {errorLevel: true}) !== 0)
        throw new Error("E-mail inválido!");
};

export { checkEmptyValue, confirmPassword, validateEmail };
