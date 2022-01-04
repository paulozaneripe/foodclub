import AuthInput from '~/components/AuthInput/AuthInput.vue';

export default {
    layout: 'auth',
    components: {
        AuthInput
    },
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async submit() {
            this.$axios.post("/api/users/create", {
                email: this.email,
                password: this.password,
            }).then(({ data }) => {
                alert("Email: " + data.email + " - Senha: " + data.password);
            });
        }
    }
};
