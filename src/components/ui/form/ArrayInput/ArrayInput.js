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
        field: {
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
        index: {
            type: Number,
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
            default: "passive",
            required: false
        }
    },
    mounted() {
        if (this.index + 1 > 1) {
            const input = document.getElementById(`${this.name}-${this.index + 1}`);
            input.focus();
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
        removeField() {
            this.$emit('removeField');
        },
        addField() {
            this.$emit('addField');
        }
    }
});
