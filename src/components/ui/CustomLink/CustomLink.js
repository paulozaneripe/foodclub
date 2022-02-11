import Vue from 'vue';

export default Vue.extend({
    props: {
        route: {
            type: String,
            default: "#",
            required: false
        },
        description: {
            type: String,
            default: "LINK",
            required: false
        },
        type: {
            type: String,
            default: "default",
            required: false
        },
    }
});
