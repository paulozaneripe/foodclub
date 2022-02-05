import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            menu: false,
        };
    },
    methods: {
        showUserMenu() {
            this.menu = !this.menu;
            document.getElementById("user-avatar").setAttribute("aria-expanded", this.menu);
            document.getElementById("user-avatar").ariaLabel = this.menu
                ? "Fechar menu de usuário"
                : "Abrir menu de usuário";
        }
    }
});
