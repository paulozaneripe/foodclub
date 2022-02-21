<template>
    <div class="user-card" role="button" tabindex="0" @click="showUser()" @keydown.enter="showUser()" >
        <div class="avatar">
            <img
                :src="avatarUrl ? avatarUrl : require('~/assets/images/avatar.png')"
                :alt="'Avatar do usuário ' + name"
            />
        </div>
        <div class="name">
            <p>{{ name }}</p>
        </div>
    </div>
</template>

<script src="./UserCard.js" />
<style lang="scss" src="./UserCard.scss" scoped />
