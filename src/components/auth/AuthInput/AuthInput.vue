<template>
    <ValidationProvider
        tag="div"
        class="input-container"
        :name="filterLabel(label)"
        :mode="mode"
        :rules="rules"
        :vid="name === 'password' ? name : ''"
        v-slot="{ errors, valid, ariaMsg, ariaInput }"
    >
        <div class="input-field" :class="errors[0] ? 'error' : ''">
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
            <span class="material-icons" :class="errors[0] ? 'error' : (valid ? 'success' : '')">{{
                errors[0] ? 'error_outline' : (valid ? 'task_alt' : icon)
            }}</span>
            <span
                v-if="type === 'password'"
                class="material-icons password-visibility"
                role="button"
                :aria-controls="name"
                aria-expanded="false"
                aria-label="Mostrar senha"
                title="Mostrar senha"
                tabindex="0"
                @click="showHidePassword($event)"
                @keyup.space="showHidePassword($event)"
                @keyup.enter="showHidePassword($event)"
            >
                visibility
            </span>
            <span v-if="type === 'date'" class="material-icons date-picker">
                calendar_today
            </span>
        </div>
        <span
            id="error-message"
            :class="errors[0] ? 'error' : ''"
            v-bind="ariaMsg"
            >{{ errors[0] }}</span
        >
    </ValidationProvider>
</template>

<script src="./AuthInput.js" />
<style lang="scss" src="./AuthInput.scss" scoped />
