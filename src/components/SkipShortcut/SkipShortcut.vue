<template>
    <a
        :href="'#' + target"
        class="skip"
        tabindex="0"
        @focus="unhide()"
        @blur="hide()"
        @click="skipToTarget($event)"
        @keyup.space="skipToTarget($event)"
    >
        {{ description }}
    </a>
</template>

<script src="./SkipShortcut.js" />
<style lang="scss" src="./SkipShortcut.scss" scoped />
