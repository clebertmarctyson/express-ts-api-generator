import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../types';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
	res.status(404);
	const error = new Error(`Not Found: ${req.originalUrl}`);
	next(error);
};

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response<ErrorResponse>,
	next: NextFunction
) => {
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

	res.status(statusCode);

	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
	});

	next();
};
