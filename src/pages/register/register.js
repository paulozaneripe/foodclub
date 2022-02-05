import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import { extend, ValidationObserver } from "vee-validate";

extend('confirm', {
    params: ['targetValue'],
    validate(inputValue, { targetValue }) {
        return inputValue === targetValue;
    },
    message: 'As senhas não coincidem'
});

export default {
    layout: 'auth',
    components: {
        AuthInput,
        ValidationObserver
    },
    data() {
        return {
            registerData: {
                email: '',
                name: '',
                password: '',
                repeatedPassword: ''
            }
        };
    },
    methods: {
        async submit() {
            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

                this.$axios.post("/api/users/create", this.registerData)
                    .then(({ data }) => {
                        this.$router.push('/login');
                        this.$filterToast(this.$toast, "Usuário cadastrado com sucesso!");
                    }).catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            });
        }
    }
};
