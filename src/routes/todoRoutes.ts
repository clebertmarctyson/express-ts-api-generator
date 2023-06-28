import { Router } from 'express';

import { getAllTodos } from '../controllers/todoController';

const todoRouter = Router();

todoRouter.get('/', getAllTodos);

export default todoRouter;
