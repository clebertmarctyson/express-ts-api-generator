import { Todo } from '../types';

export const getTodos = (): Todo[] => {
	const todos = [
		{
			id: 1,
			name: 'Start The API',
			completed: true
		}
	];

	return todos;
};
