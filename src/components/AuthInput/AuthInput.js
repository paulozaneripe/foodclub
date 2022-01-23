import Vue from 'vue';
import { ValidationProvider } from "vee-validate";

export default Vue.extend({
    components: {
        ValidationProvider
    },
    props: {
        value: {
            type: String,
            default: null,
            required: true
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
        icon: {
            type: String,
            default: "text_snippet",
            required: false
        },
        label: {
            type: String,
            default: null,
            required: true
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
        filterLabel(label) {
            let filteredLabel = label.replace("Seu ","");
            filteredLabel = filteredLabel.replace("Sua ", "");
            return filteredLabel.charAt(0).toUpperCase() + filteredLabel.slice(1);
        },
        showHidePassword(e) {
            let input = document.getElementById(this.name);

            input.type = input.type === "password" ? "text" : "password";
            e.target.innerHTML = input.type === "password" ? "visibility" : "visibility_off";
            e.target.ariaExpanded = input.type === "password" ? false : true;
            e.target.ariaLabel = input.type === "password" ? "Revelar senha" : "Ocultar senha";
            e.target.title = input.type === "password" ? "Revelar senha" : "Ocultar senha";
            input.type === "password" ? e.target.classList.remove("hide") : e.target.classList.add("hide");
        }
    }
});
