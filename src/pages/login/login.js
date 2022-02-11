import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import CustomButton from '~/components/ui/CustomButton/CustomButton.vue';
import { ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    auth: 'guest',
    components: {
        AuthInput,
        CustomButton,
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
