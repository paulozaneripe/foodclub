import db from '../config/db';
import Model from '../classes/Model';

export default class Image extends Model {
    constructor() {
        super('image');
    }

    async create(path) {
        const query = `
            INSERT INTO "${this.getTable()}" 
                (path)
            VALUES 
                ('${path}')
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }

    async update({ id, path }) {
        const query = `
            UPDATE "${this.getTable()}" SET
                path = '${path}'
            WHERE 
                id = ${id}
            RETURNING 
                id
        `;
        
        const results = await db.query(query);
        return results.rows[0].id;
    }
}
