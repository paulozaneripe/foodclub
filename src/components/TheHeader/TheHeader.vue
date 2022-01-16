<template>
    <div class="container">
        <div
            id="menu-background"
            class="darken-background"
            @click="showMenu($event)"
        ></div>
        <header :class="this.showHeaderMenu ? 'active' : ''">
            <nav>
                <ul>
                    <li>
                        <TheToggler
                            id="theme-toggler-header"
                            aria-label="Modo escuro"
                            disabled-text="light_mode"
                            enabled-text="dark_mode"
                            icon
                            :enabled-if="$colorMode.preference === 'dark'"
                            @toggle="
                                $colorMode.preference === 'light'
                                    ? ($colorMode.preference = 'dark')
                                    : ($colorMode.preference = 'light')
                            "
                        />
                    </li>
                    <li>
                        <div id="logo">
                            <NuxtLink to="/">
                                <img
                                    src="~/assets/images/foodclublogo.svg"
                                    alt="Logo do FoodClub"
                                />
                            </NuxtLink>
                        </div>
                    </li>
                    <li>
                        <button
                            type="button"
                            id="mobile-button"
                            :class="this.showHeaderMenu ? 'active' : ''"
                            aria-label="Abrir menu"
                            @click="showMenu($event)"
                            @keyup.space="showMenu($event)"
                            aria-expanded="false"
                        >
                            <span id="hamburger"></span>
                        </button>
                        <ul
                            id="links"
                            :class="this.showHeaderMenu ? 'active' : ''"
                        >
                            <li>
                                <NuxtLink to="/login"> Entrar </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/register">
                                    Cadastre-se
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script src="./TheHeader.js" />
<style lang="scss" src="./TheHeader.scss" scoped />
