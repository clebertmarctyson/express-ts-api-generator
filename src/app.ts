import express, { Express } from 'express';
import cors from 'cors';
import { todoRouter } from './routes';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/todos', todoRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
