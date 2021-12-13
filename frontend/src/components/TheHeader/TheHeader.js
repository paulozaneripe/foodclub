import Vue from 'vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler,
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        };
    },
});