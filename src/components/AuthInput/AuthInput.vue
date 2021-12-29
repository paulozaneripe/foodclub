<template>
    <div class="input-field">
        <span class="material-icons">{{ icon }}</span>
        <input :id="name" :type="type" :name="name" :value="value" :aria-label="label" @input="updateValue($event.target.value)" :placeholder="placeholder">
    </div>
</template>

<script src="./AuthInput.js" />
<style lang="scss" src="./AuthInput.scss" scoped />
