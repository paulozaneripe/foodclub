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
    data() {
        return {
            readableFont: this.$store.state.readableFont,
            fontSize: this.$store.state.fontSize,
        };
    },
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
        window.addEventListener('keydown', this.handleTab);
    },
    mounted() {
        window.onNuxtReady(() => {
            let classes = this.readableFont ? 'open-dyslexic' : 'roboto';

            if (this.fontSize === 'standard') {
                classes = classes + ' standard-font';
            } else if (this.fontSize === 'medium') {
                classes = classes + ' medium-font';
            } else if (this.fontSize === 'big') {
                classes = classes + ' big-font';
            } else if (this.fontSize === 'giant') {
                classes = classes + ' giant-font';
            }

            document.body.className = classes;
        });
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
