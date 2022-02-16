<template>
    <section>
        <Container class="users">
            <h2>Usuários</h2>
            <div id="user-cards">
                <UserCard v-for="user in users" :key="user.id" :id="user.id" :avatarUrl="user.avatar_url" :name="user.name" />
            </div>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import UserCard from '~/components/ui/includes/UserCard/UserCard.vue';

export default {
    layout: 'default',
    auth: false,
    components: {
        Container,
        UserCard
    },
    head() {
        return {
            title: 'FoodClub - Usuários',
        };
    },
    data() {
        return {
            users: []
        };
    },
    created() {
        this.$axios.get(`/api/users/list`)
            .then(( response ) => {
                this.users = response.data;
            }).catch(async (error) => {
                await this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    }
};
</script>

<style lang="scss">
.users {
    h2 {
        margin-bottom: 30px;
        text-align: center;
    }

    #user-cards {
        position: relative;
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 30px auto;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
    }
}
    
</style>
