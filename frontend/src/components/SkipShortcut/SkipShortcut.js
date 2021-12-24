import Vue from 'vue';

export default Vue.extend({
    props: {
        target: {
            type: String,
            default: null,
            required: true
        },
        description: {
            type: String,
            default: null,
            required: true
        },
    },
    methods: {
        unhide() {
            document.querySelector(".skip").style.left = "0px";
        },
        hide() {
            document.querySelector(".skip").style.left = "-10000px";
        },
        skipToTarget(e) {
            e.preventDefault();
            document.querySelector(".skip").style.left = "-10000px";
            document.getElementById(this.target).focus();
        }
    }
});
