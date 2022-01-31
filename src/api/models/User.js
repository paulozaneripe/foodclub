import db from '../config/database';
import Template from './Template';

Template.defineTable('user');

const User = {
    ...Template,
    async findByEmail(email) {
        const results = await db.query(`SELECT * FROM "user" WHERE email = '${email}'`);
        return results.rows[0];
    },
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
};

export default User;
