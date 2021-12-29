import Vue from 'vue';

export default Vue.extend({
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
        label: {
            type: String,
            default: null,
            required: true
        },
        placeholder: {
            type: String,
            default: null,
            required: true
        },
        icon: {
            type: String,
            default: "text_snippet",
            required: false
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        }
    }
});
