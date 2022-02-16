<template>
    <section class="error">
        <div v-if="error.statusCode === 404 || error.statusCode !== 404">
            <h1 v-if="error.statusCode === 404">404</h1>
            <h3>{{ error.statusCode === 404 ? "Página não encontrada!" : "Algo deu errado!" }}</h3>
            <CustomLink route="/" description="VOLTAR À PÁGINA PRINCIPAL" />
        </div>
    </section>
</template>

<script>
import CustomLink from '~/components/ui/fields/CustomLink/CustomLink.vue';

export default {
    layout: 'auth',
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
    components: {
        CustomLink
    },
    head() {
        return {
            title: 'FoodClub - Ops!',
        };
    },
};
</script>

<style lang="scss">
    .dark-mode .error > div {
        background-color: $dark-primary;
        color: white;
    }

    .light-mode .error > div {
        background-color: white;
        color: black;
    }

    .error {
        & > div {
            border-radius: 20px;
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.2);
        }

        h1, h3 {
            text-align: center;
        }

        h1 {
            font-size: 20em;
        }

        h3 {
            font-size: 5em;
            margin-bottom: 30px;
        }
    }

    @media (min-width: 767.98px) {
        .error {
            & > div {
                padding: 40px;
            }
        }
    }

    @media (max-width: 767.98px) {
        .error {
            & > div {
                padding: 30px;
            }

            h1 {
                font-size: 8em;
            }

            h3 {
                font-size: 3em;
            }
        }
    }
</style>
