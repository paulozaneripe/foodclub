import Vue from 'vue';

export default Vue.extend({
    props: {
        menu: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        showUserMenu() {
            document.getElementById("user-button").setAttribute("aria-expanded", this.menu);
            document.getElementById("user-button").ariaLabel = this.menu
                ? "Fechar menu de usuário"
                : "Abrir menu de usuário";

            this.$emit('showMenuBackground');
        }
    }
});
