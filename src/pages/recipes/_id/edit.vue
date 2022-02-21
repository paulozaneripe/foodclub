<template>
    <section>
        <Container class="recipe-edit">
            <ValidationObserver tag="div" ref="form" v-slot="{ handleSubmit }">
                <form
                    method="POST"
                    @submit.prevent="handleSubmit(submit)"
                    enctype="multipart/form-data"
                    novalidate
                >
                    <label for="recipe-images">Imagens da receita (Envie até {{ uploadLimit }} imagens)</label>
                    <ImageManager 
                        id="recipe-images" 
                        :upload-limit="uploadLimit" 
                        v-model="images" 
                        :old-images="oldImages"
                        @removedImages="getRemovedImages"
                    />
                    <CustomInput
                        v-model="title"
                        name="title"
                        max="60"
                        label="Título da receita"
                        placeholder="Digite um nome para sua receita..."
                        rules="required|min:3|max:60"
                    />
                    <ul>
                        <label for="ingredients">Ingredientes</label>
                        <li
                            v-for="(ingredient, index) in ingredients"
                            :key="index"
                        >
                            <ArrayInput
                                v-model="ingredient.value"
                                name="ingredients"
                                field="Ingrediente"
                                placeholder="Informe um ingrediente por campo..."
                                max="87"
                                :index="parseInt(index)"
                                @removeField="removeField(ingredients, index)"
                            />
                        </li>
                        <button
                            class="add-button"
                            @click.prevent="addField(ingredients)"
                        >
                            <span class="material-icons" aria-hidden="true">
                                add
                            </span>
                            Adicionar ingrediente
                        </button>
                    </ul>
                    <ul>
                        <label for="preparation">Modo de preparo</label>
                        <li 
                            v-for="(step, index) in preparation" 
                            :key="index"
                        >
                            <ArrayInput
                                v-model="step.value"
                                name="preparation"
                                field="Modo de preparo"
                                placeholder="Informe um passo por campo..."
                                max="87"
                                :index="parseInt(index)"
                                @removeField="removeField(preparation, index)"
                            />
                        </li>
                        <button
                            class="add-button"
                            @click.prevent="addField(preparation)"
                        >
                            <span class="material-icons" aria-hidden="true">
                                add
                            </span>
                            Adicionar passo
                        </button>
                    </ul>
                    <CustomTextArea
                        v-model="information"
                        name="information"
                        max="420"
                        label="Informações (Opcional)"
                        placeholder="Conte alguma curiosidade sobre esta receita..."
                        rules="min:20|max:410"
                    />
                    <CustomButton
                        class="save"
                        description="SALVAR ALTERAÇÕES"
                        color="save"
                    />
                </form>
            </ValidationObserver>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/layout/Container/Container.vue';
import { ValidationObserver } from 'vee-validate';
import ImageManager from '~/components/ui/form/ImageManager/ImageManager.vue';
import CustomButton from '~/components/ui/form/CustomButton/CustomButton.vue';
import CustomInput from '~/components/ui/form/CustomInput/CustomInput.vue';
import ArrayInput from '~/components/ui/form/ArrayInput/ArrayInput.vue';
import CustomTextArea from '~/components/ui/form/CustomTextArea/CustomTextArea.vue';

export default {
    layout: 'default',
    auth: true,
    components: {
        Container,
        ValidationObserver,
        ImageManager,
        CustomButton,
        CustomInput,
        ArrayInput,
        CustomTextArea,
    },
    head() {
        return {
            title: 'FoodClub - Editar receita',
        };
    },
    data() {
        return {
            recipes: {},
            uploadLimit: 5,
            images: null,
            oldImages: null,
            removedImages: null,
            title: '',
            ingredients: [],
            preparation: [],
            information: '',
        };
    },
    created() {
        this.$axios.get(`/api/recipes/${this.$route.params.id}/show`)
            .then(({ data }) => {
                this.recipe = data;

                if (this.$auth.user.id !== this.recipe.user_id) {
                    this.$router.push('/');
                }

                this.oldImages = this.recipe.images;

                this.title = this.recipe.title;
               
                this.recipe.ingredients.forEach(ingredient => {
                    this.ingredients.push({ value: ingredient });
                });


                this.recipe.preparation.forEach(step => {
                    this.preparation.push({ value: step });
                });

                this.information = this.recipe.information;
            }).catch(async (error) => {
                await this.$router.push('/');
                this.$filterToast(this.$toast, error);
            });
    },
    methods: {
        addField(field) {
            if (field.length < 10) {
                if (field[field.length - 1].value !== '') {
                    field.push({ value: '' });
                }
            } else {
                this.$toast.info('Você atingiu o limite de campos!', {
                    icon: {
                        iconClass: 'material-icons',
                        iconChildren: 'info',
                        iconTag: 'span'
                    }
                });
            }
        },
        removeField(field, index) {
            field[index].value = "";
            if (field.length > 1) {
                field.splice(index, 1);
            }
        },
        getObjectValues(object, valueName) {
            const JSONObject = JSON.parse(JSON.stringify(object));
            const objectValues = [];

            for (let i = 0; i < JSONObject.length; i++) {
                objectValues.push(JSONObject[i][valueName]);
            }

            return objectValues;
        },
        getRemovedImages(value) {
            this.removedImages = value;
        },
        async submit() {
            this.$refs.form.validate().then((success) => {
                if (!success) return;

                const formData = new FormData();
                if (this.images) {
                    Array.from(this.images).forEach((image) => {
                        formData.append('images', image, image.name);
                    });
                }
                formData.append('title', this.title);
                formData.append('ingredients', this.getObjectValues(this.ingredients, "value"));
                formData.append('preparation', this.getObjectValues(this.preparation, "value"));
                formData.append('information', this.information);
                if (this.removedImages) {
                    formData.append('removedImages', this.removedImages);
                }
                

                this.$axios
                    .put(`/api/recipes/${this.$route.params.id}/edit`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }).then(async () => {
                        this.$router.push(`/recipes/${this.$route.params.id}`);
                        this.$filterToast(
                            this.$toast,
                            'Receita alterada com sucesso!'
                        );
                    }).catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            });
        },
    },
};
</script>

<style lang="scss">
.user-is-tabbing {
    .image-input:focus-within {
        outline: 2px solid;
    }
}

.dark-mode {
    .user-is-tabbing {
        outline: 2px solid white;
    }
}

.light-mode {
    .user-is-tabbing {
        outline: 2px solid black;
    }
}

.recipe-edit {
    button.save {
        margin-top: 25px;
    }

    label {
        position: relative;
        font-size: 1.6em;
    }

    .add-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $blue;
        color: white;
        font-size: 1.6em;
        text-align: left;
        margin: 15px 0;
        padding: 5px 15px 5px 8px;
        border-radius: 15px;
        cursor: pointer;
        transition: background-color 0.4s;

        &:hover {
            background-color: darken($blue, 5%);
        }

        span {
            margin-right: 5px;
            font-size: 25px;
            cursor: pointer;
        }
    }
}
</style>
