import AuthInput from '~/components/AuthInput/AuthInput.vue';
import { ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    components: {
        AuthInput,
        ValidationObserver
    },
    data() {
        return {
            email: "",
            password: ""
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
                    password: this.password,
                }).then(({ data }) => {
                    alert("Email: " + data.email + " - Senha: " + data.password);
                });
            });

        }
    }
};
