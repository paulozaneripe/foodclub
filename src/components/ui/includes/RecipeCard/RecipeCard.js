import Vue from 'vue';

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true
        },
        imageUrl: {
            default: '//via.placeholder.com/700x200?text=Receita+sem+Imagem',
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
