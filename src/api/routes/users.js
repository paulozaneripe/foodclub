import { Router } from 'express';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

const routes = Router();

routes.get('/', UserController.index);
routes.post('/register', UserController.create);

// login/logout 
routes.post('/login', SessionController.login);
routes.post('/logout', SessionController.logout);
routes.post('/forgot-password', SessionController.forgot);
routes.post('/reset-password', SessionController.reset);

// // register
// routes.post('/register', UserController.post)

export default routes;
  