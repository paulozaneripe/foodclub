import Vue from 'vue';
import TheToggler from '~/components/ui/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler,
    },
    data() {
        return {
            showA11yMenu: false
        };
    },
    computed: {
        readableFont() {
            return this.$store.state.readableFont;
        }
    },
    methods: {
        showMenu() {
            this.showA11yMenu ? (this.showA11yMenu = false) : (this.showA11yMenu = true);
            document.getElementById("a11y-button").ariaLabel = this.showA11yMenu
                ? "Fechar menu de acessibilidade"
                : "Abrir menu de acessibilidade";
            let a11yBackground = document.getElementById("a11y-background");
            this.showA11yMenu ? a11yBackground.classList.add("show") : a11yBackground.classList.remove("show");
        }
    },
});
