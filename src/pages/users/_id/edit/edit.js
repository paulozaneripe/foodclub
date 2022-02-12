import Container from '~/components/ui/Container/Container.vue';
import CustomButton from '~/components/ui/CustomButton/CustomButton.vue';
import CustomInput from '~/components/ui/CustomInput/CustomInput.vue';

export default {
    layout: 'default',
    data() {
        return {
            name: '',
            surname: ''
        };
    },
    components: {
        Container,
        CustomButton,
        CustomInput
    }
};
