import Vue from 'vue';
import TheToggler from '~/components/ui/TheToggler/TheToggler.vue';
import GuestLinks from '~/components/layout/TheHeader/GuestLinks/GuestLinks.vue';
import AuthLinks from '~/components/layout/TheHeader/AuthLinks/AuthLinks.vue';

export default Vue.extend({
    components: {
        TheToggler,
        GuestLinks,
        AuthLinks
    },
    data() {
        return {
            headerMenu: false,
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
            this.headerMenu = !this.headerMenu;
            document.getElementById("menu-background").style.display = this.headerMenu ? "block" : "none";
        },
    }
});
