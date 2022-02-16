<template>
    <section>
        <Container class="user-information">

        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
export default {
    layout: 'default',
    auth: false,
    components: {
        Container
    },
    head() {
        return {
            title: 'FoodClub - Receitas',
        };
    }
};
</script>

<style lang="scss">

</style>
