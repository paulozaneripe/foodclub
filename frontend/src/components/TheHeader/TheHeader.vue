<template>
    <header>
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
                        <NuxtLink to="/" tabindex="0">
                            <img
                                src="~/assets/images/foodclublogo.svg"
                                alt="Logo do FoodClub"
                            />
                        </NuxtLink>
                    </div>
                </li>
                <li>
                    <div
                        class="sandwich-menu"
                        @click="showMenu"
                        @keyup.space="showMenu"
                    >
                        <span class="material-icons" tabindex="0"> menu </span>
                    </div>
                    <div class="links" v-show="showHeaderMenu">
                        <NuxtLink
                            tabindex="0"
                            to="/auth/login"
                            :prefetch="false"
                        >
                            Login
                        </NuxtLink>
                        <NuxtLink tabindex="0" to="/auth/register">
                            Cadastre-se
                        </NuxtLink>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script src="./TheHeader.js" />
<style lang="scss" src="./TheHeader.scss" scoped />
