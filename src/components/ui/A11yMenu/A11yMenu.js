import Vue from 'vue';
import TheToggler from '~/components/ui/form/TheToggler/TheToggler.vue';

export default Vue.extend({
    watch:{
        $route (to, from) {
            this.a11yMenu = false;
            document.getElementById("a11y-button").ariaLabel = "Abrir menu de acessibilidade";
            let a11yBackground = document.getElementById("a11y-background");
            a11yBackground.classList.remove("show");
        }
    },
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
        },
        animations() {
            return this.$store.state.animations;
        },
        bigLetterSpacing() {
            return this.$store.state.bigLetterSpacing;
        }
    },
    methods: {
        showA11yMenu() {
            this.a11yMenu = !this.a11yMenu;
            document.getElementById("a11y-button").ariaLabel = this.a11yMenu
                ? "Fechar menu de acessibilidade"
                : "Abrir menu de acessibilidade";
            let a11yBackground = document.getElementById("a11y-background");
            this.a11yMenu ? a11yBackground.classList.add("show") : a11yBackground.classList.remove("show");
        },
        closeA11yMenu() {
            if (this.a11yMenu) {
                this.a11yMenu = false;
                document.getElementById("a11y-button").ariaLabel = "Abrir menu de acessibilidade";
                let a11yBackground = document.getElementById("a11y-background");
                a11yBackground.classList.remove("show");
            }
        },
        resetA11ySettings() {
            this.$colorMode.preference = 'light';
            this.$store.dispatch('resetA11ySettings');
        }
    },
});
