<template>
    <div class="container">
        <header :class="this.headerMenu ? 'active' : ''">
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
                    <GuestLinks
                        v-if="!$auth.loggedIn"
                        :menu="this.headerMenu"
                        @showMenuMethod="this.showMenu"
                    />
                </ul>
            </nav>
        </header>
        <div
            id="menu-background"
            class="darken-background"
            @click="this.showMenu"
        ></div>
    </div>
</template>

<script src="./TheHeader.js" />
import GuestLinks from '../../guest/GuestLinks/GuestLinks.vue.js';
<style lang="scss" src="./TheHeader.scss" scoped />
