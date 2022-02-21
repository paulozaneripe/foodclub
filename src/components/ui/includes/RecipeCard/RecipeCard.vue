<template>
    <div class="recipe-card" @click="showRecipe()" @keydown.enter="showRecipe()"  role="button" tabindex="0">
        <img
            :src="imageUrl"
            :alt="'Imagem da receita ' + title"
        />
        <div class="info">
            <div class="title">
                <p>{{ title }}</p>
            </div>
            <div v-if="username" class="user">
                <p>por {{ username }}</p>
            </div>
        </div>
    </div>
</template>

<script src="./RecipeCard.js" />
<style lang="scss" src="./RecipeCard.scss" scoped />
