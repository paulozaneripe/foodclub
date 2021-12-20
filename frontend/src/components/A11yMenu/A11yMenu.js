import Vue from 'vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

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
        }
    },
});
