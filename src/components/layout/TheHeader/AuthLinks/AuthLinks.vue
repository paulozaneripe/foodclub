<template>
    <li>
        <button id="user-button" aria-expanded="false" @click.prevent="showMenu" @keyup.space="showMenu">
            {{ $auth.user.name }}
            <span class="material-icons" aria-hidden="true" :class="this.menu ? 'active' : ''">
                keyboard_arrow_down
            </span>
        </button>

    </li>
</template>

<script src="./AuthLinks.js" />
<style lang="scss" src="./AuthLinks.scss" scoped />
