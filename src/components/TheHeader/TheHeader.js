import Vue from 'vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler
    },
    data() {
        return {
            showHeaderMenu: false,
        };
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        };
    },
    methods: {
        showMenu(e) {
            e.preventDefault();

            this.showHeaderMenu = !this.showHeaderMenu;

            document.getElementById("mobile-button").setAttribute("aria-expanded", this.showHeaderMenu);
            document.getElementById("mobile-button").ariaLabel = this.showHeaderMenu
                ? "Fechar menu"
                : "Abrir menu";
            document.getElementById("menu-background").style.display = this.showHeaderMenu ? "block" : "none";
        },
    }
});
