import { Router } from 'express';
import SessionController from '../controllers/SessionController';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/', UserController.index);
routes.get('/login', SessionController.index);

// login/logout 
// routes.post('/login', SessionController.login)
// routes.post('/logout', SessionController.logout)

// // register
// routes.post('/register', UserController.post)

export default routes;
