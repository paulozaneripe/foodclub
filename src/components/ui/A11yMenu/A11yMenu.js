import Vue from 'vue';
import TheToggler from '~/components/ui/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler,
    },
    data() {
        return {
            a11yMenu: false
        };
    },
    computed: {
        readableFont() {
            return this.$store.state.readableFont;
        }
    },
    methods: {
        showMenu() {
            this.a11yMenu ? (this.a11yMenu = false) : (this.a11yMenu = true);
            document.getElementById("a11y-button").ariaLabel = this.a11yMenu
                ? "Fechar menu de acessibilidade"
                : "Abrir menu de acessibilidade";
            let a11yBackground = document.getElementById("a11y-background");
            this.a11yMenu ? a11yBackground.classList.add("show") : a11yBackground.classList.remove("show");
        }
    },
});
