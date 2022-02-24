<template>
    <section>
        <Container class="user-information">
            <div class="user-image">
                <img 
                    :src="user.avatar_url ? user.avatar_url : require('~/assets/images/avatar.png')"
                    :alt="'Avatar do usuário ' + user.name"
                >
            </div>
            <div class="info">
                <h3>{{ user.name }}</h3>
                <p>
                    {{ user.about === null || user.about === '' ? 'Este usuário não possui uma descrição.' : user.about }}
                </p>
            </div>
            <hr>
            <h4>Receitas publicadas</h4>
            <p v-if="!user.recipes" style="text-align: center;">
                Nenhuma receita publicada por este usuário.
            </p>
            <div v-else id="recipe-cards">
                <RecipeCard 
                    v-for="recipe in user.recipes" 
                    :key="recipe.id" 
                    :id="recipe.id" 
                    :imageUrl="recipe.image_url" 
                    :title="recipe.title"
                />
            </div>
            <CustomLink v-if="$auth.user && $auth.user.id === user.id" :route="`/users/${ user.id }/edit`" description="EDITAR" color="edit"/>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import RecipeCard from '~/components/ui/includes/RecipeCard/RecipeCard.vue';
import CustomLink from '~/components/ui/form/CustomLink/CustomLink.vue';

export default {
    layout: 'default',
    auth: false,
    components: {
        Container,
        RecipeCard,
        CustomLink
    },
    head() {
        return {
            title: `FoodClub ${ this.user.name ? '- ' + this.user.name : '' }`,
        };
    },
    data() {
        return {
            user: {},
            recipes: []
        };
    },
    created() {
        this.$axios.get(`/api/users/${this.$route.params.id}/show`)
            .then(({ data }) => {
                this.user = data;
            }).catch(async (error) => {
                await this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    }
};
</script>

<style lang="scss">
.user-information {
    .user-image {
        position: relative;
        margin: 0 auto 25px auto;
    
        img {
            display: block;
            object-fit: cover;
            max-width: 220px;
            width: 100%;
            height: 220px;
            min-height: 100%;
            margin: auto;
            border-radius: 50%;
            box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.2);
            outline: none;
        }

        #change-photo {
            position: absolute;
            left: 0; 
            right: 0;
            bottom: -15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 45px;
            height: 45px;
            background-color: $blue;
            color: white;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color .4s, transform .4s;

            &:hover {
                transform: rotate(180deg);
                background-color: darken($blue, 5%);
            }
        }
    }

    .info {
        text-align: center;

        h3 {
            margin-bottom: 5px;
        }

        p {
            white-space: pre-line;
        }
    }


    hr {
        opacity: 0.5;
        margin: 35px 0 25px 0;
    }
    
    h4 {
        font-size: 2.6em;
        margin-bottom: 30px;
        text-align: center;
    }

    p {
        font-size: 1.6em;
    }

    a:last-of-type {
        margin-top: 45px;
    }
}
</style>
