import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { fetchQuote } from '../services/fetchService.js';
import axios from 'axios';

const router = Router();

const relax = async (req, res) => {
	const { channel_id, return_url } = req.body;

	if (!channel_id || !return_url) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			status: 'error',
			message: 'channel_id and return_url are required',
		});
	}

	// settings.forEach(setting => {
	//     if (setting.label === "heading") {
	//         setting.label = setting.label
	//     }
	// })

	try {
		const { quote } = await fetchQuote();
		await axios.post(
			`${return_url}`,
			{
				message: quote,
				username: 'BreakTime',
				event_name: 'Take break',
				status: 'success',
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		res.status(StatusCodes.ACCEPTED).json({
			status: 'success',
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			status: 'error',
			message: error.message,
		});
	}
};

router.post('/relax', relax);

export default router;
