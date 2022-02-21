<template>
    <div class="container">
        <header :class="this.headerMenu ? 'active' : ''">
            <nav>
                <ul>
                    <li>
                        <div id="logo">
                            <NuxtLink to="/">
                                <img
                                    src="~/assets/images/logo.svg"
                                    alt="Logo do FoodClub"
                                />
                            </NuxtLink>
                        </div>
                        <NuxtLink to="/users" id="users-link" class="nav-links">
                            <span class="material-icons" aria-hidden="true">people_alt</span>
                            Usuários
                        </NuxtLink>
                        <NuxtLink to="/recipes" id="recipes-link" class="nav-links">
                            <span class="material-icons" aria-hidden="true">auto_stories</span>
                            Receitas
                        </NuxtLink>
                    </li>
                    <AuthMenu 
                        v-if="$auth.loggedIn"
                        :menu="this.headerMenu"
                        @showMenuBackground="this.showMenuBackground"
                    />
                    <GuestMenu
                        v-else
                        :menu="this.headerMenu"
                        @showMenuBackground="this.showMenuBackground"
                    />
                </ul>
            </nav>
        </header>
        <div
            id="menu-background"
            class="darken-background"
            @click="this.showMenuBackground"
        ></div>
    </div>
</template>

<script src="./TheHeader.js" />
<style lang="scss" src="./TheHeader.scss" scoped />
