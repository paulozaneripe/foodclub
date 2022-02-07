<template>
    <div>
        <SkipShortcut
            target="a11y-button"
            description="Pular para ajustes de acessibilidade"
        />
        <TheHeader />
        <main>
            <Nuxt />
        </main>
        <A11yMenu />
        <TheFooter />
    </div>
</template>

<script>
import Vue from 'vue';
import SkipShortcut from '~/components/ui/SkipShortcut/SkipShortcut.vue';
import TheHeader from '~/components/layout/TheHeader/TheHeader.vue';
import A11yMenu from '~/components/ui/A11yMenu/A11yMenu.vue';
import TheFooter from '~/components/layout/TheFooter/TheFooter.vue';

export default Vue.extend({
    watch: {
        $route() {
            document.getElementById("reset-focus").focus();
        },
    },
    data() {
        return {
            animations: this.$store.state.animations,
            readableFont: this.$store.state.readableFont,
            bigLetterSpacing: this.$store.state.bigLetterSpacing,
            fontSize: this.$store.state.fontSize
        };
    },
    components: {
        SkipShortcut,
        TheHeader,
        A11yMenu,
        TheFooter,
    },
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            },
        ],
    },
    beforeMount() {
        window.addEventListener('keydown', this.handleTab);

        let font = this.readableFont ? 'open-dyslexic ' : 'roboto ';
        let bigLetterSpacing = this.bigLetterSpacing ? 'big-letter-spacing ' : '';
        let animations = this.animations ? '' : 'no-animations';

        document.body.className = font + this.fontSize + bigLetterSpacing + animations;
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

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 234px);
}

section {
    margin: 50px auto 0 auto;
    max-width: 960px;
    width: 90%;
}
</style>
