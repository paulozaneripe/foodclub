import Vue from 'vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler,
    },
    data() {
        return {
            showA11yMenu: false,
            a11yMenuFirstFocus: false,
        };
    },
    computed: {
        readableFont() {
            return this.$store.state.readableFont;
        }
    },
    updated() {
        if (
            this.a11yMenuFirstFocus === true &&
            document.getElementById('a11y-menu') !== document.activeElement
        ) {
            document.getElementById('theme-toggler-a11ymenu').focus();
            this.a11yMenuFirstFocus = false;
        }
    },
    methods: {
        showMenu(e) {
            this.showA11yMenu
                ? (this.showA11yMenu = false)
                : (this.showA11yMenu = true);

            if (e.target instanceof HTMLElement && this.showA11yMenu === true) {
                e.target.blur();
                this.a11yMenuFirstFocus = true;
            }
        },
        decreaseFontSize() {
            if (document.body.classList.contains('giant-font')) {
                document.body.classList.toggle('giant-font');
                document.body.classList.toggle('big-font');
            } else if (document.body.classList.contains('big-font')) {
                document.body.classList.toggle('big-font');
                document.body.classList.toggle('medium-font');
            } else if (document.body.classList.contains('medium-font')) {
                document.body.classList.toggle('medium-font');
                document.body.classList.toggle('standard-font');
            }
        },
        increaseFontSize() {
            if (document.body.classList.contains('standard-font')) {
                document.body.classList.toggle('standard-font');
                document.body.classList.toggle('medium-font');
            } else if (document.body.classList.contains('medium-font')) {
                document.body.classList.toggle('medium-font');
                document.body.classList.toggle('big-font');
            } else if (document.body.classList.contains('big-font')) {
                document.body.classList.toggle('big-font');
                document.body.classList.toggle('giant-font');
            }
        },
    },
});
