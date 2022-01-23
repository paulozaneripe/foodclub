import { extend, localize } from "vee-validate";
import { required, email, min, max, alpha, alpha_num, alpha_spaces, digits, length, regex, image, ext } from "vee-validate/dist/rules";
import ptBR from 'vee-validate/dist/locale/pt_BR.json';

let rules = { required, min, max, alpha, alpha_num, alpha_spaces, digits, length, regex, image, ext };

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

localize('pt_BR', ptBR);
