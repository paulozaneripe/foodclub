import express from 'express';
import cors from 'cors';
import routes from './routes';

require('dotenv').config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
server.listen(process.env.PORT);