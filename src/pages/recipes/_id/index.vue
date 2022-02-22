<template>
    <section>
        <Container class="recipe-information">
            <div class="gallery">
                <div class="highlight">
                    <img 
                        v-if="recipe.images" 
                        :src="recipe.images[0].url" 
                        :alt="`Imagem 1 da receita ${recipe.title}`"
                        tabindex="0"
                    >
                    <img 
                        v-else
                        src="//via.placeholder.com/700x200?text=Receita+sem+Imagem" 
                        :alt="`Imagem 1 da receita ${recipe.title}`"
                    >
                </div>
            </div>
            <div  class="gallery-preview">
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
                <p>por <NuxtLink :to="`/users/${recipe.user_id}`">{{ recipe.user_name }}</NuxtLink></p>
            </div>
            <div class="recipe-body">
                <div class="ingredients">
                    <div>
                        <h3>Ingredientes</h3>
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
                        <h3>Modo de preparo</h3>
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
                        <h3>Informações adicionais</h3>
                    </div>
                    <p>
                        {{ recipe.information ? recipe.information : 'Essa receita não possui informações adicionais...'}}
                    </p>
                </div>
            </div>
            <CustomLink class="edit" v-if="$auth.user && $auth.user.id === recipe.user_id" :route="`/recipes/${ recipe.id }/edit`" description="EDITAR" color="edit"/>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import CustomLink from '~/components/ui/form/CustomLink/CustomLink.vue';

export default {
    layout: 'default',
    auth: false,
    components: {
        Container,
        CustomLink
    },
    head() {
        return {
            title: `FoodClub ${ this.recipe.title ? '- ' + this.recipe.title : '' }`,
        };
    },
    data() {
        return {
            recipe: {},
            imagesLength: 0,
            showIngredients: true,
            showPreparation: true
        };
    },
    created() {
        this.$axios.get(`/api/recipes/${this.$route.params.id}/show`)
            .then(({ data }) => {
                this.recipe = data;
                this.imagesLength = this.recipe.images.length;
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
        cursor: zoom-in;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
        }
    }

    .recipe-body {
        margin-top: 25px;

        ul, ol {
            transition: visibility .2s, opacity .2s;
        }

        h3 {
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

            h3, span {
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

            h3, span {
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
                font-size: 1.6em;
                opacity: 0.8;
                white-space: pre-line;
                text-align: left;
            }
        }
    }

    a.edit {
        margin-top: 45px;
    }
}

@media (max-width: 575.98px) { 
    .recipe-information .gallery-preview { 
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

        img {
            margin: 0;
            width: 100%;
        }
    }
}
</style>
