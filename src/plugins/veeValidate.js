import { extend, localize } from "vee-validate";
import { required, email, min, max, alpha, alpha_dash, alpha_num, alpha_spaces, digits, length, regex, image, ext } from "vee-validate/dist/rules";
import ptBR from 'vee-validate/dist/locale/pt_BR.json';

let rules = { required, min, max, alpha, alpha_dash, alpha_num, alpha_spaces, digits, length, regex, image, ext };

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule],
        message: ptBR.messages[rule]
    });
});

extend("email", {
    ...email,
    message: "Este e-mail não é válido"
});

extend('confirm', {
    params: ['targetValue'],
    validate(inputValue, { targetValue }) {
        return inputValue === targetValue;
    },
    message: 'As senhas não coincidem'
});

localize('pt_BR', ptBR);
