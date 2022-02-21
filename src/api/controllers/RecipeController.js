import { checkEmptyValue, isEmpty, hasValueMinLength } from '../utils/validations';
import s3 from '../config/awsS3';
import UserModel from '../models/User';
import RecipeModel from '../models/Recipe';
import ImageModel from '../models/Image';
import RecipeImageModel from '../models/RecipeImage';

const User = new UserModel();
const Recipe = new RecipeModel();
const Image = new ImageModel();
const RecipeImage = new RecipeImageModel();

const index = async (req, res) => {
    let recipes = await Recipe.list(6);

    const recipesPromise = recipes.map(async recipe => {
        const images = await Recipe.getImagesById(recipe.id);

        if (images.length > 0) 
            recipe.image_url = images[0].url;

        return recipe;
    });

    const allRecipes = await Promise.all(recipesPromise);
    return res.send(allRecipes);
};

const show = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) throw new Error("Receita não encontrada!");

    recipe.images = await Recipe.getImagesById(recipe.id);

    return res.send(recipe);
};

const list = async (req, res) => {
    let recipes = await Recipe.list();

    const recipesPromise = recipes.map(async recipe => {
        const images = await Recipe.getImagesById(recipe.id);

        if (images.length > 0) 
            recipe.image_url = images[0].url;

        return recipe;
    });

    const allRecipes = await Promise.all(recipesPromise);
    return res.send(allRecipes);
};

const create = async (req, res) => {
    let { userId, title, ingredients, preparation, information } = req.body;

    const user = await User.findById(userId);
    
    if (!user) throw new Error("Usuário não encontrado!");

    if (isEmpty(title)) {
        throw new Error("O campo Título deve ser preenchido!");
    }

    const recipeId = await Recipe.create({
        userId,
        title,
        ingredients,
        preparation,
        information
    });

    if (req.files.length > 0) {
        const imagesPromise = req.files.map(async (image) => {
            let url = image.location;

            let imageId = await Image.create(url);

            await RecipeImage.create({
                recipeId,
                imageId
            });
        });

        await Promise.all(imagesPromise);
    }

    return res.send({ id: recipeId });
};

const edit = async (req, res) => {
    let { title, ingredients, preparation, information, removedImages } = req.body;

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) throw new Error("Receita não encontrada!");

    const user = await User.findById(recipe.user_id);
    if (!user) throw new Error("Usuário não encontrado!");

    if (isEmpty(title)) {
        throw new Error("O campo Título deve ser preenchido!");
    }

    recipe.title = title;
    recipe.ingredients = ingredients;
    recipe.preparation = preparation;
    recipe.information = information;

    const recipeId = await Recipe.update(recipe);

    if (removedImages) {
        removedImages = removedImages.split(',');
        const removedImagesPromise = removedImages.map(async (id) => {
            const oldImage = await Image.findById(id);
            
            const key = oldImage.url.split('/').pop();
            
            s3.deleteObject({ Bucket: process.env.AWS_BUCKET_NAME, Key: key }, (error, data) => {
                if (error) throw new Error(error);
                console.log(data);
            });

            await Image.deleteById(id);
        });

        await Promise.all(removedImagesPromise);
    }

    if (req.files.length > 0) {
        const imagesPromise = req.files.map(async (image) => {
            let url = image.location;

            let imageId = await Image.create(url);

            await RecipeImage.create({
                recipeId,
                imageId
            });
        });

        await Promise.all(imagesPromise);
    }

    return res.send({ id: recipeId });
};

const remove = (req, res) => {
    res.send('User remove');
};

export default { index, show, list, create, edit, remove };
