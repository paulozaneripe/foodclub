import db from '../config/db';
import Model from '../classes/Model';

export default class Image extends Model {
    constructor() {
        super('image');
    }

    async create(url) {
        const query = `
            INSERT INTO "${this.getTable()}" 
                (url)
            VALUES 
                ('${url}')
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }

    async update({ id, url }) {
        const query = `
            UPDATE "${this.getTable()}" SET
                url = '${url}'
            WHERE 
                id = ${id}
            RETURNING 
                id
        `;
        
        const results = await db.query(query);
        return results.rows[0].id;
    }
}
