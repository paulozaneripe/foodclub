import { Pool } from 'pg';

const localDb = {
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'foodclub'
};

const productionDb = {
    user: 'qlskvqbsdqdsbx',
    password: 'ea3589627aafc945a172920b9ca830fc1c5b81af756a5407cf81cbfdeac1d851',
    host: 'ec2-54-224-64-114.compute-1.amazonaws.com',
    port: 5432,
    database: 'd5fsobskme6jkb'
};

export default new Pool(
    process.env.NODE_ENV !== 'procution' ? localDb : productionDb
);
