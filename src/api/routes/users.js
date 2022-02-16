import { Router } from 'express';
import tryCatch from '../utils/tryCatch';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import multer from '../middlewares/multer';

const routes = Router();

routes.get('/', tryCatch(UserController.index));
routes.get('/:id/show', tryCatch(UserController.show));
routes.get('/list', tryCatch(UserController.list));
routes.post('/create', tryCatch(UserController.create));
routes.put('/:id/edit', tryCatch(multer.single('avatar')), tryCatch(UserController.edit));

// login/logout 
routes.post('/login', tryCatch(SessionController.login));
routes.post('/logout', tryCatch(SessionController.logout));
routes.post('/forgot-password', tryCatch(SessionController.forgot));
routes.post('/reset-password', tryCatch(SessionController.reset));

export default routes;
