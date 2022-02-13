<template>
    <section>
        <Container class="user-information">
            <div class="user-image">
                <img 
                    src="~/assets/images/avatar.png" 
                    alt="Imagem do usuário"
                >
            </div>
            <h3>{{ user.name }}</h3>
            <p>
                {{ user.about === null || user.about === '' ? 'Este usuário não possui uma descrição.' : user.about }}
            </p>
            <hr>
            <h4>Receitas publicadas</h4>
            <p>
                Nenhuma receita publicada por este usuário.
            </p>
            <CustomLink v-if="$auth.user && $auth.user.id === user.id" :route="`/users/${ user.id }/edit`" description="EDITAR" color="edit"/>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/ui/Container/Container.vue';
import CustomLink from '~/components/ui/CustomLink/CustomLink.vue';

export default {
    layout: 'default',
    auth: false,
    components: {
        Container,
        CustomLink
    },
    data() {
        return {
            user: {}
        };
    },
    created() {
        this.$axios.get(`/api/users/${this.$route.params.id}`)
            .then(({ data }) => {
                this.user = data;
            }).catch((error) => {
                this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    }
};
</script>

<style lang="scss">
.user-information {
    .user-image {
        position: relative;
        text-align: center;
        margin: 0 auto 25px auto;
    
        img {
            position: relative;
            border-radius: 50%;
            max-width: 220px;
            width: 100%;
            box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.2);
            filter: gray;
            -webkit-filter: grayscale(1);
            filter: grayscale(1)
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

    h3, h4, p {
        text-align: center;
    }

    h3 {
        margin-bottom: 20px;
    }

    hr {
        opacity: 0.7;
        margin: 35px 0 25px 0;
    }
    
    h4 {
        font-size: 2.6em;
        margin-bottom: 30px;
    }

    p {
        font-size: 1.6em;
    }

    a:last-of-type {
        margin-top: 45px;
    }
}
</style>
