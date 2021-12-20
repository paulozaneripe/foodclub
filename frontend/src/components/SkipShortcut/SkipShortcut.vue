<template>
    <a
        :href="'#' + target"
        class="skip"
        tabindex="1"
        @focus="unhide()"
        @blur="hide()"
        @click="skipToTarget()"
        @keyup.space="skipToTarget()"
    >
        {{ description }}
    </a>
</template>

<script src="./SkipShortcut.js" />
<style lang="scss" src="./SkipShortcut.scss" scoped />
