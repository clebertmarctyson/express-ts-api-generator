import { getTodos } from '../src/services/todoServices';

describe('getTodos', () => {
	it('Should return a list of todos', () => {
		expect(getTodos().length > 0).toBe(true);
	});
});
