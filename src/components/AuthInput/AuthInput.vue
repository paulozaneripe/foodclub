<template>
    <ValidationProvider tag="div" class="input-container" :name="filterLabel(label)" :mode="mode" :rules="rules" :vid="name === 'password' ? name : ''" v-slot="{ errors, ariaMsg, ariaInput }">
        <div class="input-field">
            <input
                :id="name"
                :class="type === 'password' ? 'password' : ''"
                :value="value"
                :name="name"
                :type="type"
                :maxlength="max"
                placeholder=" "
                v-mask="mask"
                v-bind="ariaInput"
                @input="updateValue($event.target.value)"
            />
            <label id="input-label" :for="name">{{ label }}</label>
            <span class="material-icons" :class="errors[0] ? 'error' : ''">{{ errors[0] ? 'error_outline' : icon }}</span>
            <span
                v-if="type === 'password'"
                class="material-icons password-visibility"
                role="button"
                :aria-controls="name"
                aria-expanded="false"
                aria-label="Revelar senha"
                title="Revelar senha"
                @click="showHidePassword($event)"
            >
                visibility
            </span>
            <span v-if="type === 'date'" class="material-icons date-picker">
                calendar_today
            </span>
        </div>
        <span id="error-message" :class="errors[0] ? 'error' : ''" v-bind="ariaMsg">{{ errors[0] }}</span>
    </ValidationProvider>
</template>

<script src="./AuthInput.js" />
<style lang="scss" src="./AuthInput.scss" scoped />
