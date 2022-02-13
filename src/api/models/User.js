import db from '../config/db';
import Model from '../classes/Model';

export default class User extends Model {
    constructor() {
        super('user');
    }

    async findByEmail(email) {
        const results = await db.query(`SELECT * FROM "${this.getTable()}" WHERE email = '${email}'`);
        return results.rows[0];
    }

    async create(data) {
        const { name, email, password } = data;

        const query = `
            INSERT INTO "${this.getTable()}" 
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
        const { id, name, about, password } = data;

        const query = `
            UPDATE "${this.getTable()}" SET
                name = '${name}', about = '${about}', password = '${password}'
            WHERE 
                id = ${id}
            RETURNING 
                id
        `;

        const results = await db.query(query);
        return results.rows[0].id;
    }
}
