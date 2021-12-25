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
        showMenu() {
            this.showHeaderMenu
                ? (this.showHeaderMenu = false)
                : (this.showHeaderMenu = true);
        },
    }
});
