import Vue from 'vue';
import TheToggler from '~/components/ui/form/TheToggler/TheToggler.vue';
import GuestMenu from '~/components/ui/includes/GuestMenu/GuestMenu.vue';
import AuthMenu from '~/components/ui/includes/AuthMenu/AuthMenu.vue';

export default Vue.extend({
    components: {
        TheToggler,
        GuestMenu,
        AuthMenu
    },
    data() {
        return {
            headerMenu: false,
        };
    },
    methods: {
        showMenuBackground() {
            this.headerMenu = !this.headerMenu;
            let menuBackground = document.getElementById("menu-background");
            this.headerMenu ? menuBackground.classList.add("show") : menuBackground.classList.remove("show");
        },
    }
});
