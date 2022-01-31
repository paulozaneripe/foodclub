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
            document.getElementById("user-button").setAttribute("aria-expanded", this.menu);
            document.getElementById("user-button").ariaLabel = this.menu
                ? "Fechar menu"
                : "Abrir menu";

            this.$emit('showMenuMethod');
        }
    }
});
