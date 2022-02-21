<template>
    <section class="recipes">
        <Container class="recipes">
            <h2>Minhas receitas</h2>
            <div id="recipe-cards" v-if="recipes">
                <RecipeCard 
                    v-for="recipe in recipes" 
                    :key="recipe.id" 
                    :id="recipe.id" 
                    :imageUrl="recipe.image_url" 
                    :title="recipe.title"
                    :username="recipe.user_name" 
                />
            </div>
            <h3 v-else>Você não possui receitas publicadas</h3>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import RecipeCard from '~/components/ui/includes/RecipeCard/RecipeCard.vue';

export default {
    layout: 'default',
    components: {
        Container,
        RecipeCard
    },  
    head() {
        return {
            title: `FoodClub - Minhas receitas }`,
        };
    },
    data() {
        return {
            recipes: []
        };
    },
    created() {
        this.$axios.get(`/api/users/${this.$route.params.id}/recipes`)
            .then(( response ) => {
                this.recipes = response.data;
                if (this.recipes.length === 0) this.recipes = null;
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
        margin-bottom: 30px;
        text-align: center;
    }

    h3 {
        text-align: center;
        opacity: 0.6;
        font-size: 2em;
    }

    #recipe-cards {
        margin-top: 20px;
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        gap: 30px;
        justify-content: center;
        align-items: center;
        text-align: left;
    }
}
</style>
