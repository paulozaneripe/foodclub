import { Router } from 'express';
import tryCatch from '../utils/tryCatch';
import RecipeController from '../controllers/RecipeController';
import multer from '../middlewares/multer';

const routes = Router();

routes.get('/index', tryCatch(RecipeController.index));
routes.get('/:id/show', tryCatch(RecipeController.show));
routes.get('/list', tryCatch(RecipeController.list));
routes.post('/create', tryCatch(multer.array('images', 5)), tryCatch(RecipeController.create));
routes.put('/:id/edit', tryCatch(multer.array('images', 5)), tryCatch(RecipeController.edit));
routes.delete('/:id/delete', tryCatch(RecipeController.remove));

export default routes;
