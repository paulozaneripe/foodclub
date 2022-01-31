<template>
<div>
    <div id="reset-focus" tabindex="-1" aria-hidden="true"></div>
    <a
        :href="'#' + target"
        class="skip"
        @focus="unhide()"
        @blur="hide()"
        @click="skipToTarget($event)"
        @keyup.space="skipToTarget($event)"
    >
        {{ description }}
    </a>
</div>
</template>

<script src="./SkipShortcut.js" />
<style lang="scss" src="./SkipShortcut.scss" scoped />
