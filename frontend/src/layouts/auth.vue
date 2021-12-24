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
        A11yMenu
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
            bodyAttrs: {
                class: 'roboto standard-font',
            },
        };
    },
    beforeMount() {
        window.addEventListener('keydown', this.handleTab);

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
    height: 100vh;
    margin: 0 auto;
    max-width: 960px;
    width: 90%;
}
</style>
