<template>
    <li @click="logout ? logoutUser() : closeMenu()">
        <NuxtLink
            :to="route"
        >
            <span class="material-icons" aria-hidden="true">
                {{ icon }}
            </span>

            {{ description }}
        
        </NuxtLink>
    </li>
</template>

<script src="./AuthLink.js" />
<style lang="scss" src="./AuthLink.scss" scoped />
