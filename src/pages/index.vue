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
            <CustomLink route="/recipes/create" description="PUBLIQUE SUA RECEITA" />
        </Container>
    </section>
</template>

<script>
import SearchBar from '~/components/ui/includes/SearchBar/SearchBar.vue';
import Container from '../components/layout/Container/Container.vue';
import RecipeCard from '~/components/ui/includes/RecipeCard/RecipeCard.vue';
import CustomLink from '~/components/ui/form/CustomLink/CustomLink.vue';

export default {
    auth: false,
    components: {
        // SearchBar,
        Container,
        RecipeCard,
        CustomLink
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

a {
    margin-top: 25px;
}
</style>
