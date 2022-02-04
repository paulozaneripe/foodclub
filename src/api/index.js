import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import routes from './routes';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(passport.initialize());
server.use(routes);

// Error handling
server.use((req, res, next) => {
    const error = new Error("Algo deu errado!");
    error.status = 404;
    next(error);
});

server.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    });
});

export default { path: '/api', handler: server };
