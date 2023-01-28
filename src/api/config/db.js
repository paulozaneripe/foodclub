import { Pool } from 'pg';

const localDb = {
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'foodclub',
};

const productionDb = {
    user: process.env.AWS_USER,
    password: process.env.AWS_PASSWORD,
    host: process.env.AWS_HOST,
    port: 5432,
    database: process.env.AWS_DATABASE,
    ssl: {
        rejectUnauthorized: false,
    },
};

export default new Pool(
    process.env.NODE_ENV !== 'production' ? localDb : productionDb
);
