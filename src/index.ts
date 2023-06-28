import dotenv from 'dotenv';
import { log } from 'console';
import app from './app';

dotenv.config();

const port: number = Number.parseInt(process.env.PORT!) || 5000;

(async () => {
	try {
		app.listen(port, () => {
			log(`🚀[Server] Server is runnig on http://127.0.0.1:${port}`);
		});
	} catch (error: any) {
		log(`Error: ${error.message}`);
	}
})();
