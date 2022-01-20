<template>
    <div class="input-field" :title="label">
        <input
            :id="name"
            :class="type === 'password' ? 'password' : ''"
            :type="type"
            :name="name"
            :value="value"
            placeholder=" "
            @input="updateValue($event.target.value)"
            aria-labelledby="input-label"
        />
        <label id="input-label" :for="name">{{ label }}</label>
        <span class="material-icons">{{ icon }}</span>
        <span 
            v-if="type === 'password'" 
            class="material-icons password-visibility" 
            @click="showHidePassword($event)"
        >
            visibility
        </span>
    </div>
</template>

<script src="./AuthInput.js" />
<style lang="scss" src="./AuthInput.scss" scoped />
