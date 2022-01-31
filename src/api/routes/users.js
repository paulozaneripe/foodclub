import { Router } from 'express';
import tryCatch from '../utils/tryCatch';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

const routes = Router();

routes.get('/', tryCatch(UserController.index));
routes.post('/create', tryCatch(UserController.create));

// login/logout 
routes.post('/login', tryCatch(SessionController.login));
routes.post('/logout', tryCatch(SessionController.logout));
routes.post('/forgot-password', tryCatch(SessionController.forgot));
routes.post('/reset-password', tryCatch(SessionController.reset));

export default routes;
