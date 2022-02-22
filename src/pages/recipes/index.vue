<template>
    <section class="recipes">
        <Container class="recipes">
            <h2>Receitas</h2>
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
import Container from '~/components/layout/Container/Container.vue';
import RecipeCard from '~/components/ui/includes/RecipeCard/RecipeCard.vue';

export default {
    layout: 'default',
    auth: false,
    components: {
        Container,
        RecipeCard
    },  
    head() {
        return {
            title: 'FoodClub - Receitas',
        };
    },
    data() {
        return {
            recipes: []
        };
    },
    created() {
        this.$axios.get(`/api/recipes/list`)
            .then(( response ) => {
                this.recipes = response.data;
            }).catch(async (error) => {
                await this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    }
};
</script>

<style lang="scss">
.recipes {
    h2 {
        margin-top: -10px;
        margin-bottom: 30px;
        text-align: center;
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
}
</style>
