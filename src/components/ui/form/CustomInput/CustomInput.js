import Vue from 'vue';
import { ValidationProvider } from "vee-validate";

export default Vue.extend({
    components: {
        ValidationProvider
    },
    props: {
        value: {
            type: [String, null],
            default: null,
            required: false
        },
        name: {
            type: String,
            default: null,
            required: true
        },
        type: {
            type: String,
            default: "text",
            required: false
        },
        max: {
            type: String,
            required: false
        },
        label: {
            type: String,
            default: null,
            required: true
        },
        placeholder: {
            type: String,
            default: null,
            required: false
        },
        readonly: {
            type: Boolean,
            default: false,
            required: false
        },
        rules: {
            type: String,
            default: null,
            required: false
        },
        mask: {
            type: String,
            default: null,
            required: false
        },
        mode: {
            type: String,
            default: "eager",
            required: false
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
        showHidePassword(e) {
            let input = document.getElementById(this.name);

            input.type = input.type === "password" ? "text" : "password";
            e.target.innerHTML = input.type === "password" ? "visibility" : "visibility_off";
            e.target.ariaExpanded = input.type === "password" ? false : true;
            e.target.ariaLabel = input.type === "password" ? "Mostrar senha" : "Ocultar senha";
            e.target.title = input.type === "password" ? "Mostrar senha" : "Ocultar senha";
            input.type === "password" ? e.target.classList.remove("hide") : e.target.classList.add("hide");
        }
    }
});
