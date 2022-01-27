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
            document.getElementById("mobile-button").setAttribute("aria-expanded", this.menu);
            document.getElementById("mobile-button").ariaLabel = this.menu
                ? "Fechar menu"
                : "Abrir menu";

            this.$emit('showMenuMethod');
        }
    }
});
