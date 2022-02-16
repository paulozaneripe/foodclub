import db from '../config/db';

export default class User {

    async findById(id) {
        const query = `
            SELECT 
                "image".url AS avatar_url, "user".*  
            FROM 
                "user" 
            LEFT JOIN 
                "image" 
            ON 
                "image".id = "user".image_id 
            WHERE 
                "user".id = ${id}
        `;

        const results = await db.query(query);
        return results.rows[0];
    }

    async findByEmail(email) {
        const query = `
            SELECT 
                "user".*, "image".url AS avatar_url  
            FROM 
                "user" 
            LEFT JOIN 
                "image" 
            ON 
                "image".id = "user".image_id 
            WHERE 
                "user".email = LOWER('${email}')
        `;

        const results = await db.query(query);
        return results.rows[0];
    }

    async list() {
        const query = `
            SELECT 
                "user".*, "image".url AS avatar_url
            FROM 
                "user" 
            LEFT JOIN 
                "image" 
            ON 
                "image".id = "user".image_id
            ORDER BY
                "user".created_at
        `;

        const results = await db.query(query);
        return results.rows;
    }

    async create(data) {
        const { name, email, password } = data;

        const query = `
            INSERT INTO "user" 
                (name, email, password)
            VALUES 
                ('${name}', '${email}', '${password}')
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }

    async update(data) {
        const { id, image_id, name, about, password } = data;

        const query = `
            UPDATE "user" SET
                image_id = ${image_id}, name = '${name}', about = '${about}', password = '${password}'
            WHERE 
                id = ${id}
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }
}
