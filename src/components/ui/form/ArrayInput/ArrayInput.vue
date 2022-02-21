<template>
    <ValidationProvider
        tag="div"
        class="input-field"
        :name="field"
        :mode="mode"
        :rules="index === 0 ? 'required|min:3|max:87' : 'min:3|max:87'"
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
            />
            <button v-if="index > 0 || value != ''" class="remove-button" aria-label="Remover" @click.prevent="removeField()">
                <span 
                    class="material-icons" 
                    aria-hidden="true"
                    title="Remover campo"
                >
                    close
                </span>
            </button>
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
