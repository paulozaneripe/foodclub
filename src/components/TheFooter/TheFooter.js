import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
});
