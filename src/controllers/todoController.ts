import { Request, Response } from 'express';
import { getTodos } from '../services/todoServices';
import { Todo } from '../types';

export const getAllTodos = async (req: Request, res: Response<Todo[]>) => {
	const todos = getTodos();
	res.status(200).json(todos);
};
