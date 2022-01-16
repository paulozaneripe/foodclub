<template>
    <div>
        <SkipShortcut
            target="a11y-button"
            description="Pular para ajustes de acessibilidade"
        />
        <main>
            <Nuxt />
        </main>
        <A11yMenu />
    </div>
</template>

<script>
import Vue from 'vue';
import SkipShortcut from '~/components/SkipShortcut/SkipShortcut.vue';
import A11yMenu from '~/components/A11yMenu/A11yMenu.vue';

export default Vue.extend({
    data() {
        return {
            readableFont: this.$store.state.readableFont,
            fontSize: this.$store.state.fontSize,
        };
    },
    components: {
        SkipShortcut,
        A11yMenu,
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
        document.body.className = this.readableFont
            ? 'open-dyslexic ' + this.fontSize
            : 'roboto ' + this.fontSize;
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
    height: 100%;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0 auto;
    width: 90%;
}

@media (max-width: 1199.98px) {
    section {
        flex-direction: column;
    }
}
</style>
