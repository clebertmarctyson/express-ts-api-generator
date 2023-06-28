export type Todo = {
	id: number;
	name: string;
	completed: boolean;
};

export interface ErrorMessage {
	message: string;
}

export interface ErrorResponse extends ErrorMessage {
	stack?: string;
}
