import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import { ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    components: {
        AuthInput,
        ValidationObserver
    },
    data() {
        return {
            loginData: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        async submit() {
            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

                this.$auth.loginWith('local', { data: this.loginData })
                    .then(() => {
                        this.$filterToast(this.$toast, "Usuário logado com sucesso!");
                    }).catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            });
        }
    }
};
