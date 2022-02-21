import db from '../config/db';
import Model from '../classes/Model';

export default class RecipeImage extends Model {
    constructor() {
        super('recipe_image');
    }

    async create({ recipeId, imageId }) {
        const query = `
            INSERT INTO "${this.getTable()}" 
                (recipe_id, image_id)
            VALUES 
                (${recipeId}, ${imageId})
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }
}
