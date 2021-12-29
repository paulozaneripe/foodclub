import AuthInput from '~/components/AuthInput/AuthInput.vue';

export default {
    layout: 'auth',
    components: {
        AuthInput
    },
    data() {
        return {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        async submit() {
            this.$axios.post("/api/users/create", {
                email: this.email,
                name: this.name,
                password: this.password,
                confirmPassword: this.confirmPassword
            }).then(({ data }) => {
                alert("Email: " + data.email + " - Nome: " + data.name + " - Senha: " + data.password + " - Senha confirmada: " + data.confirmPassword);
            });
        }
    }
};
