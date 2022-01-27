<template>
    <li>
        <button
            type="button"
            id="mobile-button"
            :class="this.menu ? 'active' : ''"
            aria-label="Abrir menu"
            @click.prevent="showMenu"
            @keyup.space="showMenu"
            aria-controls="links"
            aria-expanded="false"
        >
            <span id="hamburger"></span>
        </button>
        <ul id="links" :class="this.menu ? 'active' : ''">
            <li>
                <NuxtLink to="/login">Entrar</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/register">Cadastre-se</NuxtLink>
            </li>
        </ul>
    </li>
</template>

<script src="./AuthLinks.js" />
<style lang="scss" src="./AuthLinks.scss" scoped />
