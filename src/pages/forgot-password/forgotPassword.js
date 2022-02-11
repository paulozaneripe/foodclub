import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import { ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    auth: 'guest',
    components: {
        AuthInput,
        ValidationObserver
    },
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        async submit() {
            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

            });
        }
    }
};
