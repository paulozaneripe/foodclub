import Vue from 'vue';

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true
        },
        avatarUrl: {
            default: require('~/assets/images/avatar.png'),
            required: true
        },
        name: {
            type: String,
            default: "Usuário",
            required: true
        }
    },
    methods: {
        showUser() {
            this.$router.push(`/users/${this.id}`);
        }
    }
});
