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
                    <div class="links">
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
<script>
import Vue from 'vue';
import TheToggler from '~/components/TheToggler/TheToggler.vue';

export default Vue.extend({
    components: {
        TheToggler,
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        };
    },
});
</script>

<style lang="scss" src="./TheHeader.scss" scoped />
