<template>
    <li>
        <button
            type="button"
            id="mobile-button"
            :class="this.menu ? 'active' : ''"
            aria-label="Abrir menu"
            aria-controls="links"
            aria-expanded="false"
            @click.prevent="showMenu"
            @keyup.enter="showMenu"
            @keyup.space="showMenu"
        >
            <span id="hamburger" aria-hidden="true"></span>
        </button>
        <ul id="links" :class="this.menu ? 'active' : ''">
            <li>
                <NuxtLink to="/login"><span class="material-icons" aria-hidden="true">login</span>Entrar</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/register"><span class="material-icons" aria-hidden="true">how_to_reg</span>Cadastre-se</NuxtLink>
            </li>
        </ul>
    </li>
</template>

<script src="./GuestLinks.js" />
<style lang="scss" src="./GuestLinks.scss" scoped />
