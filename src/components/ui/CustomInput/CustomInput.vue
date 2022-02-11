<template>
    <ValidationProvider
        tag="div"
        class="input-container"
        :name="label"
        :mode="mode"
        :rules="rules"
        v-slot="{ errors, ariaMsg, ariaInput }"
    >
        <div class="input-field">
            <label :for="name">{{ label }}</label>
            <input
                :id="name"
                :class="errors[0] ? 'error' : ''"
                :value="value"
                :name="name"
                :type="type"
                :maxlength="max"
                :placeholder="placeholder"
                v-mask="mask"
                v-bind="ariaInput"
                @input="updateValue($event.target.value)"
            />
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

<script src="./CustomInput.js" />
<style lang="scss" src="./CustomInput.scss" scoped />
