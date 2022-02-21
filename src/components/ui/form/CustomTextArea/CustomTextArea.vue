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
            <textarea
                :id="name"
                :class="errors[0] ? 'error' : ''"
                :value="value"
                :name="name"
                :maxlength="max"
                :placeholder="placeholder"
                v-bind="ariaInput"
                @input="updateValue($event.target.value)"
            />
        </div>
        <span
            id="error-message"
            :class="errors[0] ? 'error' : ''"
            v-bind="ariaMsg"
            >{{ errors[0] }}</span
        >
    </ValidationProvider>
</template>

<script src="./CustomTextArea.js" />
<style lang="scss" src="./CustomTextArea.scss" scoped />
