import { Pool } from 'pg';

export default new Pool({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'foodclub'
});
