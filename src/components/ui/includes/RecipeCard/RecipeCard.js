import Vue from 'vue';

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true
        },
        imageUrl: {
            default: '//via.placeholder.com/1920x350/CECECE/2B2B2B/?text=Receita+sem+Imagem',
            required: true
        },
        title: {
            type: String,
            default: "Receita",
            required: true
        },
        username: {
            type: String,
            required: false
        }
    },
    methods: {
        showRecipe() {
            this.$router.push(`/recipes/${this.id}`);
        }
    }
});
