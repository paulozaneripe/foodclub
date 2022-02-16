import Vue from 'vue';

export default Vue.extend({
    props: {
        route: {
            type: String,
            default: "/login",
            required: false
        },
        icon: {
            type: String,
            default: "link",
            required: false
        },
        description: {
            type: String,
            default: "Link",
            required: false
        },
        logout: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    mounted () {
        if (this.logout) {
            this.$el.firstChild.setAttribute("role", "button");
        }
    },
    methods: {
        closeMenu() {
            this.$emit('showUserMenu');
        },
        async logoutUser() {
            this.$emit('showUserMenu');
            await this.$auth.logout();
            this.$router.push('/login');
        }
    }
});
