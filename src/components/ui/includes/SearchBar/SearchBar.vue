<template>
    <div class="search-bar">
        <img
            src="~/assets/images/icons/search.svg"
            alt="Ícone de Pesquisa"
        />
        <input
            id="recipe-search"
            type="text"
            name="recipe-search"
            placeholder="Encontre a receita que está procurando..."
            aria-label="Pesquisar receita..."
        />
    </div>
</template>

<script src="./SearchBar.js" />
<style lang="scss" src="./SearchBar.scss" scoped />
