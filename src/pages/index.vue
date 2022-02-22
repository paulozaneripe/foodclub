<template>
    <section>
        <!-- <SearchBar /> -->
        <Container>
            <h2>Últimas receitas publicadas</h2>
            <div id="recipe-cards">
                <RecipeCard 
                    v-for="recipe in recipes" 
                    :key="recipe.id" 
                    :id="recipe.id" 
                    :imageUrl="recipe.image_url" 
                    :title="recipe.title"
                    :username="recipe.user_name" 
                />
            </div>
        </Container>

    </section>
</template>

<script>
import SearchBar from '~/components/ui/includes/SearchBar/SearchBar.vue';
import Container from '../components/layout/Container/Container.vue';
import RecipeCard from '~/components/ui/includes/RecipeCard/RecipeCard.vue';

export default {
    auth: false,
    components: {
        // SearchBar,
        Container,
        RecipeCard
    },    
    data() {
        return {
            recipes: []
        };
    },
    created() {
        this.$axios.get(`/api/recipes/index`)
            .then(( response ) => {
                this.recipes = response.data;
            }).catch(async (error) => {
                await this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    }
};
</script>

<style lang="scss" scoped>
h2 {
    margin-top: -10px;
}

#recipe-cards {
    margin-top: 20px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
}
</style>
