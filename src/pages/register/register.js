import AuthInput from '~/components/AuthInput/AuthInput.vue';
import { extend, ValidationObserver } from "vee-validate";

extend('confirm', {
    params: ['targetValue'],
    validate(inputValue, { targetValue }) {
        return inputValue === targetValue;
    },
    message: 'As senhas não correspondem'
});

export default {
    layout: 'auth',
    components: {
        AuthInput,
        ValidationObserver
    },
    data() {
        return {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        };
    },
    methods: {
        async submit() {

            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

                this.$axios.post("/api/users/create", {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                }).then(({ data }) => {
                    alert("Email: " + data.email + " - Nome: " + data.name + " - Senha: " + data.password + " - Senha confirmada: " + data.confirmPassword);
                });
            });
        }
    }
};
