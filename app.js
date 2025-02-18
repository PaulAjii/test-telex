// main packages
import * as dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import express from 'express';
import cors from './utils/cors.js';

// other packages
import relaxRoute from './routes/relaxation.js';
import integrationRoute from './routes/integrationConf.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors);
app.use(express.json());

app.get('/', (req, res) => {
	res.status(StatusCodes.OK).json({
		status: 'success',
		message: 'Welcome to this integration',
	});
});

app.use('/', relaxRoute);
app.use('/', integrationRoute);

app.listen(port, () =>
	console.log(`Server is successfully running on port ${port}`)
);
