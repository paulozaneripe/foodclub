<template>
    <section>
        <Container class="recipe-form">
            <RecipeFields />
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import RecipeFields from '~/components/ui/includes/RecipeFields/RecipeFields.vue';

export default {
    layout: 'default',
    auth: true,
    components: {
        Container,
        RecipeFields
    },
    head() {
        return {
            title: 'FoodClub - Enviar receita',
        };
    }
};
</script>
