import db from '../config/db';

class Model {
    constructor(tableName) {
        this.table = tableName;
    }

    getTable() {
        return this.table;
    }

    async findById(id) {
        const results = await db.query(`SELECT * FROM "${this.getTable()}" WHERE id = ${id}`);
        return results.rows[0];
    }

    deleteById(id) {
        return db.query(`DELETE FROM "${this.getTable()}" WHERE id = ${id}`);
    }
}

export default Model;
