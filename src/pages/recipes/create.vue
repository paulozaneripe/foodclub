<template>
    <section>
        <Container class="recipe-create">
            <ValidationObserver tag="div" ref="form" v-slot="{ handleSubmit }">
                <form
                    method="POST"
                    @submit.prevent="handleSubmit(submit)"
                    enctype="multipart/form-data"
                    novalidate
                >

                    <CustomInput
                        v-model="title"
                        name="title"
                        max="50"
                        label="Título da receita"
                        placeholder="Digite um nome para sua receita..."
                        rules="required"
                    />
                    <ul>
                        <label for="ingredients">Ingrediente</label>
                        <li v-for="(ingredient, index) in ingredients" :key="index">
                            <ArrayInput
                                v-model="ingredient.value"
                                name="ingredient"
                                field="Ingrediente"
                                placeholder="Informe um ingrediente por campo..."
                                max="50"
                                rules="required"
                                @removeField="removeField(ingredients, index)"
                            />
                        </li>
                        <button class="add-button" @click.prevent="addField(ingredients)">
                            <span class="material-icons" aria-hidden="true">
                                add
                            </span>
                            Adicionar
                        </button>
                    </ul>
                    <ul>
                        <label for="ingredients">Modo de preparo</label>
                        <li v-for="(step, index) in preparation" :key="index">
                            <ArrayInput
                                v-model="step.value"
                                name="preparation"
                                field="Modo de preparo"
                                placeholder="Informe um passo por campo..."
                                max="50"
                                rules="required"
                                @removeField="removeField(preparation, index)"
                            />
                        </li>
                        <button class="add-button" @click.prevent="addField(preparation)">
                            <span class="material-icons" aria-hidden="true">
                                add
                            </span>
                            Adicionar
                        </button>
                    </ul>
                    <CustomTextArea
                        v-model="information"
                        name="information"
                        max="420"
                        label="Informações (Opcional)"
                        placeholder="Conte alguma curiosidade sobre esta receita..."
                        rules="min:40|max:410"
                    />
                    <CustomButton
                        class="save"
                        description="SALVAR"
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
import CustomButton from '~/components/ui/fields/CustomButton/CustomButton.vue';
import CustomInput from '~/components/ui/fields/CustomInput/CustomInput.vue';
import ArrayInput from '~/components/ui/fields/ArrayInput/ArrayInput.vue';
import CustomTextArea from '~/components/ui/fields/CustomTextArea/CustomTextArea.vue';

export default {
    layout: 'default',
    auth: true,
    components: {
        Container,
        ValidationObserver,
        CustomButton,
        CustomInput,
        ArrayInput,
        CustomTextArea,
    },
    head() {
        return {
            title: 'FoodClub - Enviar receita',
        };
    },
    data() {
        return {
            images: '',
            title: '',
            ingredients: [{ value: '' }],
            preparation: [{ value: '' }],
            information: '',
        };
    },
    methods: {
        handleFileInput(e) {

        },
        addField(field, index) {            
            if (field.length < 10) {
                if (field[field.length - 1].value !== '') {
                    field.push({ value: '' });
                }
            } else {
                alert("Você atingiu o limite de campos!");
            }
        },
        removeField(field, index) {
            if (field.length > 1) {
                field.splice(index, 1);
            }
        },
        removeEmptyField(field) {
            if (field.length > 1 && !field[field.length - 1].value) {
                field.splice(field.length - 1, 1);
            }

            return field;
        },
        async submit() {
            this.$refs.form.validate().then((success) => {
                if (!success) return;

                this.$filterToast(this.$toast, 'Receita salva com sucesso!');

                // const formData = new FormData();
                // if (this.images)
                //     formData.append('images', this.images, this.images);

                // this.$axios
                //     .post(`/api/recipes/create`, formData, {
                //         headers: {
                //             'Content-Type':
                //                 'multipart/form-data; boundary=${form._boundary}',
                //         },
                //     })
                //     .then(async () => {
                //         this.$router.push(`/recipes`);
                //         this.$filterToast(
                //             this.$toast,
                //             'Receita salva com sucesso!'
                //         );
                //     })
                //     .catch((error) => {
                //         this.$filterToast(this.$toast, error);
                //     });
            });
        }
    },
};
</script>

<style lang="scss">
.dark-mode .user-is-tabbing {
    outline: 2px solid white;
}

.light-mode .user-is-tabbing {
    outline: 2px solid black;
}

.recipe-create {
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
        margin: 15px 0;
        padding: 5px 15px 5px 8px;
        border-radius: 15px;
        cursor: pointer;
        transition: background-color .4s;

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
