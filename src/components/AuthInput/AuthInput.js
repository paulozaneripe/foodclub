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
        icon: {
            type: String,
            default: "text_snippet",
            required: false
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
        showHidePassword(e) {
            let input = document.getElementById(this.name);

            if (input.type === "password") {
                input.type = "text";
                e.target.innerHTML = "visibility_off";
                e.target.classList.add("hide");
            } else {
                input.type = "password";
                e.target.innerHTML = "visibility";
                e.target.classList.remove("hide");
            }
        }
    }
});
