import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { fetchQuote } from '../services/fetchService.js';

const router = Router();

const relax = async (req, res) => {
	try {
		const quote = await fetchQuote();

		res.status(StatusCodes.OK).json({
			status: 'success',
			data: quote,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			status: 'error',
			message: error.message,
		});
	}
};

router.get('/relax', relax);

export default router;
