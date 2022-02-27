import db from '../config/db';

export default class Recipe {

    async list(limit) {
        let query = `
            SELECT 
                "recipe".*, "user".name AS user_name
            FROM 
                "recipe"
            LEFT JOIN 
                "user" ON "user".id = "recipe".user_id
            ORDER BY
                "created_at"
            DESC
        `;

        if (limit) {
            query += ` LIMIT ${limit}`;
        }

        const results = await db.query(query);
        return results.rows;
    }

    async findById(id) {
        const query = `
            SELECT 
                "recipe".*, "user".id AS user_id, "user".name AS user_name, "image".url AS user_avatar_url
            FROM 
                "recipe"
            LEFT JOIN 
                "user" ON "user".id = "recipe".user_id
            LEFT JOIN 
                "image" ON "image".id = "user".image_id
            WHERE 
                "recipe".id = ${id}
        `;

        const results = await db.query(query);
        return results.rows[0];
    }

    async listByUserId(id) {
        const query = `
            SELECT 
                "recipe".*, "user".name AS user_name
            FROM 
                "recipe"
            LEFT JOIN 
                "user" ON "user".id = "recipe".user_id
            WHERE 
                "recipe".user_id = ${id}
        `;

        const results = await db.query(query);
        return results.rows;
    }

    async getImagesById(id) {
        const query = `
            SELECT 
                "image".*
            FROM 
                "recipe_image"
            LEFT JOIN 
                "image"
            ON 
                (recipe_image.image_id = image.id)
            WHERE 
                recipe_image.recipe_id = ${id}
            ORDER BY
                "recipe_image".image_id
        `;

        const results = await db.query(query);
        return results.rows;
    }

    async create(data) {
        const { userId, title, ingredients, preparation, information } = data;

        const query = `
            INSERT INTO "recipe"  
                (user_id, title, ingredients, preparation, information)
            VALUES 
                (${userId}, '${title}', string_to_array('${ingredients}', '§'), string_to_array('${preparation}', '§'), '${information}')
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }

    async update(data) {
        const { id, title, ingredients, preparation, information } = data;

        const query = `
            UPDATE "recipe" SET
                title = '${title}', ingredients = string_to_array('${ingredients}', '§'), preparation = string_to_array('${preparation}', '§'), information = '${information}'
            WHERE 
                id = ${id}
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }

    deleteById(id) {
        return db.query(`DELETE FROM "recipe" WHERE id = ${id}`);
    }
}
