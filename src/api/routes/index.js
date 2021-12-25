import { Router } from 'express';
import users from './users';
import recipes from './recipes';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('A rota está funcionando!');
});

routes.use('/users', users);
routes.use('/recipes', recipes);

export default routes;
