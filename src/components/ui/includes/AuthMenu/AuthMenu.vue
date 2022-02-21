<template>
    <li class="container" v-on-clickaway="closeUserMenu">
        <button
            id="user-button"
            :class="this.menu ? 'active' : ''"
            aria-label="Abrir menu de usuário"
            aria-controls="user-links"
            aria-expanded="false"
            @click.prevent="showUserMenu"
        >
            <span v-show="!$auth.user.avatar_url" class="material-icons user-avatar" aria-hidden="true">
                account_circle
            </span>
            <img 
                v-show="$auth.user.avatar_url"
                class="user-avatar"
                :src="$auth.user.avatar_url ? $auth.user.avatar_url : require('~/assets/images/avatar.png')"
                :alt="'Avatar do usuário ' + $auth.user.name"
            />
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
                <AuthLink 
                    @showUserMenu="this.showUserMenu" 
                    :route="`/users/${ $auth.user.id }/edit`" 
                    icon="manage_accounts" 
                    description="Minha conta" 
                />
                <AuthLink 
                    @showUserMenu="this.showUserMenu" 
                    :route="`/users/${ $auth.user.id }/recipes`" 
                    icon="menu_book" 
                    description="Minhas receitas" 
                />
                <AuthLink 
                    @showUserMenu="this.showUserMenu" 
                    route="/recipes/create" 
                    icon="local_dining" 
                    description="Enviar receita" 
                />
                <AuthLink 
                    class="main-links"
                    @showUserMenu="this.showUserMenu" 
                    :route="`/users`" 
                    icon="people_alt" 
                    description="Usuários" 
                />
                <AuthLink 
                    class="main-links"
                    @showUserMenu="this.showUserMenu" 
                    route="/recipes" 
                    icon="auto_stories" 
                    description="Receitas" 
                />
                <AuthLink 
                    icon="logout" description="Sair" 
                    logout 
                />
            </ul>
        </div>
    </li>
</template>

<script src="./AuthMenu.js" />
<style lang="scss" src="./AuthMenu.scss" scoped />
