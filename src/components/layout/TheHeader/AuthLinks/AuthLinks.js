import Vue from 'vue';

export default Vue.extend({
    props: {
        menu: {
            type: Boolean,
            required: true
        },
    },
    data() {
        return {
            avatarPath: 'images/avatar.png'
        };
    },
    mounted() {
        this.avatarPath = this.$auth.user.avatar_path;
    },
    methods: {
        showUserMenu() {
            document.getElementById("user-button").setAttribute("aria-expanded", this.menu);
            document.getElementById("user-button").ariaLabel = this.menu
                ? "Abrir menu de usuário"
                : "Fechar menu de usuário";

            this.$emit('showMenuBackground');
        },
        async logout() {
            await this.$auth.logout();
            this.$router.push('/login');
        }
    }
});
