import Vue from 'vue';

export default Vue.extend({
    props: {
        description: {
            type: String,
            default: "BOTÃO",
            required: false
        },
        color: {
            type: String,
            default: "default",
            required: false
        },
    }
});
