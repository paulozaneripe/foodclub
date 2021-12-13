<template>
    <div class="search-bar">
        <img
            src="~/assets/images/icons/search-icon.svg"
            alt="Ícone de Pesquisa"
        />
        <input
            id="recipe-search"
            type="text"
            name="recipe-search"
            aria-label="Pesquisa de receitas culinárias"
            placeholder="Encontre a receita que está procurando..."
        />
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" src="./SearchBar.scss" scoped />
