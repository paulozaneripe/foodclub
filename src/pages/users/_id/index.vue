<template>
    <section>
        <Container class="user-information">
            <div class="user-image">
                <img src="~/assets/images/avatar.png" alt="Imagem do usuário">
                <a v-if="$auth.user.id === this.user.id" :href="`/users/${ $auth.user.id }/edit`" class="icon" title="Alterar imagem de usuário">
                    <span id="change-photo" class="material-icons">
                        party_mode
                    </span>
                </a>
            </div>
            <h3>{{ this.user.name }}</h3>
            <p>
                {{ this.user.about === null || this.user.about === '' ? 'Este usuário não possui uma descrição.' : ''}}
            </p>
            <hr>
            <h4>Receitas publicadas</h4>
            <p>
                Nenhuma receita publicada por este usuário.
            </p>
            <CustomLink v-if="$auth.user.id === this.user.id" :route="`/users/${ this.user.id }/edit`" description="EDITAR" color="edit"/>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/ui/Container/Container.vue';
import CustomLink from '~/components/ui/CustomLink/CustomLink.vue';

export default {
    layout: 'default',
    auth: false,
    data() {
        return {
            user: {}
        };
    },
    mounted() {
        this.$axios.get(`/api/users/${this.$route.params.id}`)
            .then(({ data }) => {
                this.user = data;
            }).catch((error) => {
                this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    },
    components: {
        Container,
        CustomLink
    }
};
</script>

<style lang="scss">
.user-information {
    .user-image {
        position: relative;
        text-align: center;
        margin-bottom: 25px;
        margin: unset auto;
    
        img {
            display: block;
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
            bottom: 0;
            padding: 10px;
            background-color: #2e60a1;
            color: white;
            border-radius: 50%;
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
    
    button {
        width: 100%;
        height: 58px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1.4em;
        cursor: pointer;
        color: white;
        background-color: #0E72D0;
        transition: background-color 350ms;

        &:hover {
            background-color: darken(#0E72D0, 5%);
        }

        &:disabled {
            color: darken(white, 20%);
        }
    }
}
</style>
