<template>
    <ValidationProvider
        tag="div"
        class="input-field"
        :name="field"
        :mode="mode"
        :rules="index === 0 ? 'required|min:3|max:200' : 'min:3|max:200'"
        v-slot="{ errors, ariaMsg, ariaInput }"
    >
        <div>
            <input
                :id="name"
                :class="errors[0] ? 'error' : ''"
                :value="value"
                :name="name"
                :type="type"
                :maxlength="max"
                :placeholder="placeholder"
                :readonly="readonly"
                v-mask="mask"
                v-bind="ariaInput"
                @input="updateValue($event.target.value)"
                @keydown.enter="addField"
            />
            <span 
                v-if="index > 0 || value != ''"
                @click.prevent="removeField()"
                @keydown.enter="removeField()"
                role="button"
                class="material-icons remove-button" 
                aria-label="Remover"
                title="Remover campo"
                tabindex="0"
            >
                close
            </span>
        </div>        
        <span
            id="error-message"
            :class="errors[0] ? 'error' : ''"
            v-bind="ariaMsg"
        >
            {{ errors[0] }}
        </span>
    </ValidationProvider>
</template>

<script src="./ArrayInput.js" />
<style lang="scss" src="./ArrayInput.scss" scoped />
