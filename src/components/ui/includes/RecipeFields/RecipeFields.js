import Vue from 'vue';
import { ValidationObserver } from 'vee-validate';
import ImageManager from '~/components/ui/form/ImageManager/ImageManager.vue';
import CustomButton from '~/components/ui/form/CustomButton/CustomButton.vue';
import CustomInput from '~/components/ui/form/CustomInput/CustomInput.vue';
import ArrayInput from '~/components/ui/form/ArrayInput/ArrayInput.vue';
import CustomTextArea from '~/components/ui/form/CustomTextArea/CustomTextArea.vue';

export default Vue.extend({
    components: {
        ValidationObserver,
        ImageManager,
        CustomButton,
        CustomInput,
        ArrayInput,
        CustomTextArea,
    },
    data() {
        return {
            recipes: {},
            uploadLimit: 5,
            images: null,
            oldImages: null,
            removedImages: null,
            title: '',
            ingredients: [{ value: '' }],
            preparation: [{ value: '' }],
            information: '',
        };
    },
    props: {
        post: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    created() {
        if (!this.post) {
            this.$axios.get(`/api/recipes/${this.$route.params.id}/show`)
                .then(({ data }) => {
                    this.recipe = data;

                    if (this.$auth.user.id !== this.recipe.user_id) {
                        this.$router.push('/');
                    }

                    this.oldImages = this.recipe.images;
                    this.title = this.recipe.title;
                
                    this.ingredients.pop();
                    this.preparation.pop();

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
        }
    },
    methods: {
        getRemovedImages(value) {
            this.removedImages = value;
        },
        addField(field) {
            if (field.length < 50) {
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
        valuesToString(object, valueName) {
            const JSONObject = JSON.parse(JSON.stringify(object));
            let stringValues = "";

            for (let i = 0; i < JSONObject.length; i++) {
                let value = JSONObject[i][valueName].replace(/\s+/g, ' ');
                if (!(value === null || value.match(/^\s*$/) !== null)) {
                    stringValues = stringValues + value.replace('§',' ');
                    if (i !== JSONObject.length - 1)
                        stringValues = stringValues + "§";
                }
            }

            return stringValues;
        },
        async submit() {
            this.$refs.form.validate().then((success) => {

                const formData = new FormData();
                if (this.images) {
                    Array.from(this.images).forEach((image) => {
                        formData.append('images', image, image.name);
                    });
                }
                formData.append('userId', this.$auth.user.id);
                formData.append('title', this.title);
                formData.append('ingredients', this.valuesToString(this.ingredients, "value"));
                formData.append('preparation', this.valuesToString(this.preparation, "value"));
                formData.append('information', this.information);
                if (!this.post && this.removedImages) {
                    formData.append('removedImages', this.removedImages);
                }

                if (this.post) {
                    this.$axios
                        .post(`/api/recipes/create`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        }).then(async () => {
                            this.$router.push(`/users/${this.$auth.user.id}/recipes`);
                            this.$filterToast(
                                this.$toast,
                                'Receita salva com sucesso!'
                            );
                        }).catch((error) => {
                            this.$filterToast(this.$toast, error);
                        });
                } else {
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
                }
            });
        }
    }
});
