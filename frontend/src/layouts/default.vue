<template>
    <div>
        <TheHeader />
        <Nuxt />
        <A11yMenu />
        <TheFooter />
    </div>
</template>

<script>
import Vue from 'vue';
import TheHeader from '~/components/TheHeader/TheHeader.vue';
import A11yMenu from '~/components/A11yMenu/A11yMenu.vue';
import TheFooter from '~/components/TheFooter/TheFooter.vue';

export default Vue.extend({
    components: {
        TheHeader,
        A11yMenu,
        TheFooter,
    },
    head() {
        return {
            bodyAttrs: {
                class: 'roboto standard-font',
            },
        };
    },
    beforeMount() {
        if (this.$store.state.readableFont === true) {
            this.$store.dispatch('changeFont');
        }

        window.addEventListener('keydown', this.handleTab);
    },
    methods: {
        handleTab(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('user-is-tabbing');
                window.removeEventListener('keydown', this.handleTab);
            }
        },
    },
});
</script>

<style lang="scss">
main {
    min-height: calc(100vh - 234px);
}

section {
    margin: 50px auto 0 auto;
    max-width: 960px;
    width: 90%;
}
</style>
