<template>
    <section>
        <Container class="recipe-information">
            <div class="gallery">
                <div class="highlight">
                    <img 
                        :src="hasImage ? recipe.images[0].url : defaultImage" 
                        :alt="`Imagem 1 da receita ${recipe.title}`"
                    >
                </div>
            </div>
            <div v-if="multipleImages" class="gallery-preview">
                <img 
                    v-for="(image, index) in recipe.images" 
                    :key="index" :class="index === 0 ? 'active' : ''" 
                    :src="image.url" 
                    :alt="`Imagem ${index + 1} da receita ${recipe.title}`"
                    tabindex="0"
                    @keydown.enter="setImage($event)"
                    @click="setImage($event)"
                >
            </div>
            <div class="title">
                <h1>{{ recipe.title }}</h1>
                <p>por <NuxtLink :to="`/users/${recipe.user_id}`"><strong>{{ recipe.user_name }}</strong></NuxtLink></p>
            </div>
            <div class="recipe-body">
                <div class="ingredients">
                    <div>
                        <h2>Ingredientes</h2>
                        <span 
                            role="button" 
                            aria-expanded="true" 
                            tabindex="0"
                            @keypress.enter="toggleIngredients"
                            @click="toggleIngredients"
                        >
                            ocultar
                        </span>
                    </div>
                    <ul v-show="showIngredients">
                        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                            {{ ingredient }}
                        </li>
                    </ul>
                </div>
                <div class="preparation">
                    <div>
                        <h2>Modo de preparo</h2>
                        <span 
                            role="button" 
                            aria-expanded="true" 
                            tabindex="0"
                            @keypress.enter="togglePreparation"
                            @click="togglePreparation"
                        >
                            ocultar
                        </span>
                    </div>
                    <ol v-show="showPreparation">
                        <li v-for="(step, index) in recipe.preparation" :key="index">
                            {{ step }}
                        </li>
                    </ol>
                </div>
                <div class="information">
                    <div>
                        <h2>Informações adicionais</h2>
                    </div>
                    <p>
                        {{ recipe.information ? recipe.information : 'Essa receita não possui informações adicionais.'}}
                    </p>
                </div>
            </div>
            <CustomLink class="edit" v-if="$auth.user && $auth.user.id === recipe.user_id" :route="`/recipes/${ recipe.id }/edit`" description="EDITAR" color="edit"/>
            <form
                method="POST"
                @submit.prevent="submit"
                novalidate
            >
                <CustomButton class="delete" v-if="$auth.user && $auth.user.id === recipe.user_id" description="EXCLUIR" />
            </form>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import CustomLink from '~/components/ui/form/CustomLink/CustomLink.vue';
import CustomButton from '~/components/ui/form/CustomButton/CustomButton.vue';

export default {
    layout: 'default',
    auth: false,
    components: {
        Container,
        CustomLink,
        CustomButton
    },
    head() {
        return {
            title: `FoodClub ${ this.recipe.title ? '- ' + this.recipe.title : '' }`,
        };
    },
    data() {
        return {
            recipe: {},
            hasImage: false,
            multipleImages: false,
            showIngredients: true,
            showPreparation: true,
            defaultImage: '//via.placeholder.com/1920/CECECE/2B2B2B/?text=Receita+sem+Imagem'
        };
    },
    created() {
        this.$axios.get(`/api/recipes/${this.$route.params.id}/show`)
            .then(({ data }) => {
                this.recipe = data;
                this.hasImage = this.recipe.images.length >= 1;
                this.multipleImages = this.recipe.images.length > 1;
            }).catch(async (error) => {
                await this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    },
    methods: {
        toggleIngredients(event) {
            this.showIngredients = !this.showIngredients;
            const { target } = event;
            target.ariaExpanded = this.showIngredients;
            target.innerHTML = this.showIngredients ? 'ocultar' : 'mostrar';
        },
        togglePreparation(event) {
            this.showPreparation = !this.showPreparation;
            const { target } = event;
            target.ariaExpanded = this.showPreparation;
            target.innerHTML = this.showPreparation ? 'ocultar' : 'mostrar';
        },
        setImage(event) {
            const { target } = event;
            const highlight = document.querySelector('.highlight img');
            const previews = document.querySelectorAll('.gallery-preview img');

            previews.forEach((preview) => {
                preview.classList.remove('active');
            });

            target.classList.add('active');

            highlight.src = target.src;
            highlight.alt = target.alt;
        },
        submit() {
            const confirmation = confirm(`Deseja realmente excluir a receita "${this.recipe.title}"?`);
            if (confirmation) {

                const userId = this.$auth.user.id;

                this.$axios.delete(`/api/recipes/${this.$route.params.id}/delete`)
                    .then(async () => {
                        this.$router.push(`/users/${this.$auth.user.id}/recipes`);
                        this.$filterToast(
                            this.$toast,
                            'Receita excluída com sucesso!'
                        );
                    }).catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            }
        }
    }
};
</script>

<style lang="scss">
.recipe-information {
    .highlight > img {
        width: 100%;
        height: 280px;
        object-fit: cover;
        border-radius: 25px;
    }

    .gallery-preview {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 10px;

        img {
            height: 80px;
            width: 80px;
            object-fit: cover;
            opacity: 0.6;
            cursor: pointer;
            transition: opacity 0.2s;
            border-radius: 5px;

            &:not(:last-of-type) {
                margin-right: 10px;
            }

            &:hover, &.active {
                opacity: 1;
            }
        }
    }

    .title {
        margin-top: 25px;
        text-align: center;

        h1 {
            font-size: 3em;
            margin-bottom: 5px;
        }

        p {
            
            font-size: 2em;
            opacity: 0.6;

            a:hover {
                text-decoration: underline;
            }
        }
    }

    .recipe-body {
        margin-top: 25px;

        ul, ol {
            transition: visibility .2s, opacity .2s;
        }

        h2 {
            text-align: left;
            font-size: 2.4em;
            opacity: 0.9;
        }

        span {
            margin-left: 10px;
            font-weight: bold;
            opacity: 0.6;
            text-transform: uppercase;
            font-size: 1.1em;
            cursor: pointer;
        }

        .ingredients {
            margin-bottom: 45px;

            & > div {
                margin-bottom: 20px;
            }

            h2, span {
                display: inline-block;
            }

            li {
                font-size: 1.6em;
                text-align: left;
                opacity: 0.8;

                &:not(:last-of-type) {
                    margin-bottom: 10px;
                }

                &:before {
                    content:"• ";
                    font-weight: bold;
                    margin-right: 5px;
                }
            }
        }

        .preparation {
            margin-bottom: 45px;

            & > div {
                margin-bottom: 20px;
            }

            h2, span {
                display: inline-block;
            }

            li {
                font-size: 1.6em;
                text-align: left;
                counter-increment: item;
                opacity: 0.8;

                &:not(:last-of-type) {
                    margin-bottom: 10px;
                }

                &:before {
                    content: counter(item) ". ";
                    margin-right: 2px;
                    font-weight: bold;
                }
            }
        }

        .information {
            p {
                margin-top: -11px;
                font-size: 1.6em;
                line-height: 1.6em;
                opacity: 0.8;
                white-space: pre-line;
                text-align: left;
            }
        }
    }

    a.edit {
        margin-top: 25px;
    }

    button.delete {
        margin-top: 25px;
    }
}

@media (max-width: 575.98px) { 
    .recipe-information .gallery-preview { 
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 10px;

        img {
            margin: 0;
            width: 100%;
        }
    }
}
</style>
