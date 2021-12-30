import Vue from 'vue';
import SkipShortcut from '~/components/SkipShortcut/SkipShortcut.vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        SkipShortcut,
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

            this.showHeaderMenu
                ? this.showHeaderMenu = false
                : this.showHeaderMenu = true;

            document.getElementsByClassName("mobile-button")[0].setAttribute("aria-expanded", this.showHeaderMenu);
            document.getElementsByClassName("mobile-button")[0].ariaLabel = this.showHeaderMenu ? "Fechar menu" : "Abrir menu";

        },
    }
});
