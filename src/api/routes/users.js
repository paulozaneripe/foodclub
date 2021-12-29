import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/', UserController.index);
routes.post('/create', UserController.create);

// login/logout 
// routes.post('/login', SessionController.login)
// routes.post('/logout', SessionController.logout)

// // register
// routes.post('/register', UserController.post)

export default routes;
