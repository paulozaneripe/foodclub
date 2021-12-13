<template>
    <div class="a11y">
        <div v-if="showA11yMenu" id="menu">
            <ul>
                <li>
                    <TheToggler
                        id="theme-toggler-a11ymenu"
                        enabled-text="Modo escuro"
                        :enabled-if="$colorMode.preference === 'dark'"
                        @toggle="
                            $colorMode.preference === 'light'
                                ? ($colorMode.preference = 'dark')
                                : ($colorMode.preference = 'light')
                        "
                    />
                </li>
                <li>
                    <TheToggler
                        id="readable-font-toggler"
                        enabled-text="Fonte legível"
                    />
                </li>
                <li>
                    <div id="font-sizing">
                        <span
                            tabindex="0"
                            class="material-icons"
                            role="button"
                            aria-label="Diminuir tamanho da fonte"
                            @click="decreaseFontSize"
                            @keyup.space="decreaseFontSize"
                        >
                            text_decrease
                        </span>
                        <span
                            tabindex="0"
                            class="material-icons"
                            role="button"
                            aria-label="Aumentar tamanho da fonte"
                            @click="increaseFontSize"
                            @keyup.space="increaseFontSize"
                        >
                            text_increase
                        </span>
                    </div>
                </li>
            </ul>
            <span class="arrow"></span>
        </div>
        <span
            id="a11y-menu"
            tabindex="0"
            role="button"
            :aria-pressed="showA11yMenu === false ? 'false' : 'true'"
            aria-label="Menu de Acessibilidade"
            @click="showMenu($event)"
            @keyup.space="showMenu($event)"
        >
            <img
                src="~/assets/images/icons/accessibility.svg"
                alt="Símbolo da Acessibilidade"
            />
        </span>
    </div>
</template>

<script>
import Vue from 'vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler,
    },
    data() {
        return {
            showA11yMenu: false,
            a11yMenuFirstFocus: false,
        };
    },
    computed: {},
    updated() {
        if (
            this.a11yMenuFirstFocus === true &&
            document.getElementById('a11y-menu') !== document.activeElement
        ) {
            document.getElementById('theme-toggler-a11ymenu').focus();
            this.a11yMenuFirstFocus = false;
        }
    },
    methods: {
        showMenu(e) {
            this.showA11yMenu
                ? (this.showA11yMenu = false)
                : (this.showA11yMenu = true);

            if (e.target instanceof HTMLElement && this.showA11yMenu === true) {
                e.target.blur();
                this.a11yMenuFirstFocus = true;
            }
        },
        decreaseFontSize() {
            if (document.body.classList.contains('giant-font')) {
                document.body.classList.toggle('giant-font');
                document.body.classList.toggle('big-font');
            } else if (document.body.classList.contains('big-font')) {
                document.body.classList.toggle('big-font');
                document.body.classList.toggle('medium-font');
            } else if (document.body.classList.contains('medium-font')) {
                document.body.classList.toggle('medium-font');
                document.body.classList.toggle('standard-font');
            }
        },
        increaseFontSize() {
            if (document.body.classList.contains('standard-font')) {
                document.body.classList.toggle('standard-font');
                document.body.classList.toggle('medium-font');
            } else if (document.body.classList.contains('medium-font')) {
                document.body.classList.toggle('medium-font');
                document.body.classList.toggle('big-font');
            } else if (document.body.classList.contains('big-font')) {
                document.body.classList.toggle('big-font');
                document.body.classList.toggle('giant-font');
            }
        },
    },
});
</script>

<style lang='scss' src='./A11yMenu.scss' scoped />
