import Vue from 'vue';

export default Vue.extend({
    props: {
        description: {
            type: String,
            default: "BOTÃO",
            required: false
        },
        type: {
            type: String,
            default: "default",
            required: false
        },
    }
});
