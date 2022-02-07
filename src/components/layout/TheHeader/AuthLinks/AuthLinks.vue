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
            <span class="material-icons" aria-hidden="true">
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
                    <NuxtLink :to="`/users/${ $auth.user.id }`"><span class="material-icons" aria-hidden="true">manage_accounts</span>Minha conta</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#"><span class="material-icons" aria-hidden="true">auto_stories</span>Minhas receitas</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#"><span class="material-icons" aria-hidden="true">local_dining</span>Enviar receita</NuxtLink>
                </li>
                <li>
                    <button             
                        @click.prevent="logout"
                        @keyup.space="logout"
                    >
                        <span class="material-icons" aria-hidden="true">logout</span>Sair
                    </button>
                </li>
            </ul>
        </div>
    </li>
</template>

<script src="./AuthLinks.js" />
<style lang="scss" src="./AuthLinks.scss" scoped />
