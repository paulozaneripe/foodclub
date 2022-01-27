import Vue from 'vue';
import TheToggler from '~/components/global/TheToggler/TheToggler.vue';
import GuestLinks from '~/components/guest/GuestLinks/GuestLinks.vue';

export default Vue.extend({
    components: {
        TheToggler,
        GuestLinks
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
