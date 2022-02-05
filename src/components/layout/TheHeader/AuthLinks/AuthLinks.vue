<template>
    <li class="container">
        <button
            id="user-button"
            :class="this.menu ? 'active' : ''"
            aria-label="Abrir menu de usuário"
            aria-controls="user-links"
            aria-expanded="false"
            @click.prevent="showUserMenu"
            @keyup.space="showUserMenu"
        >
            <span 
                class="material-icons"
            >
                account_circle
            </span>
            <p>{{ $auth.user.name }}</p>
            <span id="hamburger" aria-hidden="true"></span>
            <span 
                class="material-icons" 
                :class="this.menu ? 'active' : ''"
            >
                expand_less
            </span>
        </button>
        <div id="user-links" :class="this.menu ? 'active' : ''">
            <ul>
                <li>
                    <NuxtLink to="#"><span class="material-icons" aria-hidden="true">manage_accounts</span>Minha conta</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#"><span class="material-icons" aria-hidden="true">menu_book</span>Enviar receita</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#"><span class="material-icons" aria-hidden="true">logout</span>Sair</NuxtLink>
                </li>
            </ul>
        </div>
    </li>
</template>

<script src="./AuthLinks.js" />
<style lang="scss" src="./AuthLinks.scss" scoped />
