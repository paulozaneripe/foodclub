<template>
    <div class="container">
        <span
            v-if="disabledText"
            class="toggler-label"
            :class="icon ? 'material-icons' : ''"
        >
            {{ disabledText }}
        </span>
        <div class="toggler-container">
            <label
                :aria-label="ariaLabel === null ? enabledText : ariaLabel"
                class="toggler"
                :for="id"
            >
                <input
                    :id="id"
                    type="checkbox"
                    :checked="enabledIf"
                    @click="$emit('toggle')"
                />
                <span class="toggler-background toggler-ball"></span>
            </label>
        </div>
        <span
            v-if="enabledText"
            class="toggler-label"
            :class="icon ? 'material-icons' : ''"
        >
            {{ enabledText }}
        </span>
    </div>
</template>

<script src="./TheToggler.js" />
<style lang="scss" src="./TheToggler.scss" scoped />
