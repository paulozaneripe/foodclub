import Container from '~/components/ui/Container/Container.vue';
import CustomLink from '~/components/ui/CustomLink/CustomLink.vue';

export default {
    layout: 'default',
    auth: false,
    data() {
        return {
            user: {}
        };
    },
    mounted() {
        this.$axios.get(`/api/users/${this.$route.params.id}`)
            .then(({ data }) => {
                this.user = data;
            }).catch((error) => {
                this.$filterToast(this.$toast, error);
            });
    },
    components: {
        Container,
        CustomLink
    }
};
