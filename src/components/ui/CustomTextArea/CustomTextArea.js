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
        }
    }
});
