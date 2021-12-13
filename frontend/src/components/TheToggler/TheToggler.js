import Vue from 'vue';

export default Vue.extend({
    props: {
        id: {
            type: String,
            default: null,
            required: true,
        },
        ariaLabel: {
            type: String,
            default: null,
        },
        disabledText: {
            type: String,
            default: null,
        },
        enabledText: {
            type: String,
            default: null,
        },
        icon: {
            type: Boolean,
            default: false,
        },
        enabledIf: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
});