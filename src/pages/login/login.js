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
};
