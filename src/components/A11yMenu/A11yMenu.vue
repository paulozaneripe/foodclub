<template>
    <div id="a11y-menu">
        <div v-if="showA11yMenu" class="content">
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
                        :enabled-if="readableFont"
						@toggle="$store.dispatch('changeFont')"
                    />
                </li>
                <li>
                    <div id="font-sizing">
                        <span
                            tabindex="0"
                            class="material-icons"
                            role="button"
                            aria-label="Diminuir tamanho da fonte"
                            @click="$store.dispatch('decreaseFontSize')"
                            @keyup.space="$store.dispatch('decreaseFontSize')"
                        >
                            text_decrease
                        </span>
                        <span
                            tabindex="0"
                            class="material-icons"
                            role="button"
                            aria-label="Aumentar tamanho da fonte"
                            @click="$store.dispatch('increaseFontSize')"
                            @keyup.space="$store.dispatch('increaseFontSize')"
                        >
                            text_increase
                        </span>
                    </div>
                </li>
            </ul>
            <span class="arrow"></span>
        </div>
        <span
            id="a11y-button"
            tabindex="0"
            role="button"
            :aria-expanded="showA11yMenu === false ? 'false' : 'true'"
            aria-haspopup="true"
            aria-label="Abrir menu de acessibilidade"
            @click="showMenu"
            @keyup.space="showMenu"
        >
            <img
                src="~/assets/images/icons/accessibility.svg"
                alt="Símbolo da Acessibilidade"
            />
        </span>
    </div>
</template>

<script src="./A11yMenu.js" />
<style lang="scss" src="./A11yMenu.scss" scoped />
