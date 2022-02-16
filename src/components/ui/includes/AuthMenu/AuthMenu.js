import Vue from 'vue';
import AuthLink from '~/components/ui/includes/AuthLink/AuthLink.vue';

export default Vue.extend({
    props: {
        menu: {
            type: Boolean,
            required: true
        },
    },
    components: {
        AuthLink
    },
    methods: {
        showUserMenu() {
            document.getElementById("user-button").setAttribute("aria-expanded", this.menu ? "false" : "true");
            document.getElementById("user-button").ariaLabel = this.menu
                ? "Abrir menu de usuário"
                : "Fechar menu de usuário";

            this.$emit('showMenuBackground');
        },
        closeUserMenu() {
            if (this.menu) {
                document.getElementById("user-button").setAttribute("aria-expanded", "false");
                document.getElementById("user-button").ariaLabel = "Abrir menu de usuário";
                this.$emit('showMenuBackground');
            }
        }
    }
});
