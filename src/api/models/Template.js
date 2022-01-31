import db from '../config/database';

const Template = {
    defineTable(table) {
        if (!table) throw new Error('Invalid Params!');
        this.table = table;

        return this;
    },
    async findById(id) {
        const results = await db.query(`SELECT * FROM "${this.table}" WHERE id = ${id}`);
        return results.rows[0];
    },
    deleteById(id) {
        return db.query(`DELETE FROM "${this.table}" WHERE id = ${id}`);
    }
};

export default Template;
