<template>
    <div>
        <div
            id="a11y-background"
            class="darken-background"
            @click="showA11yMenu"
        ></div>
        <div @blur="showA11yMenu">
            <div id="a11y-menu" :class="a11yMenu ? 'active' : ''">
                <ul>
                    <li>
                        <h3>Ajustes de acessibilidade</h3>
                    </li>
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
                            id="animations-toggler"
                            enabled-text="Animações"
                            :enabled-if="animations"
                            @toggle="$store.dispatch('toggleAnimations')"
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
                        <TheToggler
                            id="big-letter-spacing"
                            enabled-text="Maior espaço entre letras"
                            :enabled-if="bigLetterSpacing"
                            @toggle="$store.dispatch('toggleBigLetterSpacing')"
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
                                @keyup.space="
                                    $store.dispatch('decreaseFontSize')
                                "
                                @keyup.enter="
                                    $store.dispatch('decreaseFontSize')
                                "
                            >
                                text_decrease
                            </span>
                            <span
                                tabindex="0"
                                class="material-icons"
                                role="button"
                                aria-label="Aumentar tamanho da fonte"
                                @click="$store.dispatch('increaseFontSize')"
                                @keyup.space="
                                    $store.dispatch('increaseFontSize')
                                "
                                @keyup.enter="$store.dispatch('increaseFontSize')"
                            >
                                text_increase
                            </span>
                        </div>
                    </li>
                    <li>
                        <button @click.prevent="resetA11ySettings">
                            Redefinir configurações
                        </button>
                    </li>
                </ul>
                <span class="arrow"></span>
            </div>
            <span
                id="a11y-button"
                tabindex="0"
                role="button"
                :aria-expanded="a11yMenu"
                aria-haspopup="true"
                aria-label="Abrir menu de acessibilidade"
                @click="showA11yMenu"
                @keyup.space="showA11yMenu"
                @keyup.enter="showA11yMenu"
            >
                <img
                    src="~/assets/images/icons/accessibility.svg"
                    alt="Símbolo da Acessibilidade"
                />
            </span>
        </div>
    </div>
</template>

<script src="./A11yMenu.js" />
<style lang="scss" src="./A11yMenu.scss" scoped />
