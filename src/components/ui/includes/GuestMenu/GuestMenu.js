import Vue from 'vue';

export default Vue.extend({
    props: {
        menu: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        showMenu() {
            document.getElementById("mobile-button").setAttribute("aria-expanded", this.menu ? "false" : "true");
            document.getElementById("mobile-button").ariaLabel = this.menu
                ? "Abrir menu"
                : "Fechar menu";

            this.$emit('showMenuBackground');
        }
    }
});
