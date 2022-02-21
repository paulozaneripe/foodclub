<template>
    <li>
        <button
            id="mobile-button"
            :class="this.menu ? 'active' : ''"
            aria-label="Abrir menu"
            aria-controls="links"
            aria-expanded="false"
            @click.prevent="showMenu"
        >
            <span id="hamburger" aria-hidden="true"></span>
        </button>
        <ul id="links" :class="this.menu ? 'active' : ''">
            <li id="login-link">
                <NuxtLink to="/login"><span class="material-icons" aria-hidden="true">login</span>Entrar</NuxtLink>
            </li>
            <li id="register-link">
                <NuxtLink to="/register"><span class="material-icons" aria-hidden="true">how_to_reg</span>Cadastre-se</NuxtLink>
            </li>
            <li @click="showMenu()" class="main-links">
                <NuxtLink to="/users"><span class="material-icons" aria-hidden="true">people_alt</span>Usuários</NuxtLink>
            </li>
            <li @click="showMenu()" class="main-links">
                <NuxtLink to="/recipes"><span class="material-icons" aria-hidden="true">auto_stories</span>Receitas</NuxtLink>
            </li>
            <li @click="showMenu()" class="main-links">
                <NuxtLink to="/recipes/create"><span class="material-icons" aria-hidden="true">local_dining</span>Enviar receita</NuxtLink>
            </li>
        </ul>
    </li>
</template>

<script src="./GuestMenu.js" />
<style lang="scss" src="./GuestMenu.scss" scoped />
