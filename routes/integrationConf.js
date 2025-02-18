import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

const getIntegration = (req, res) => {
	const baseUrl = `${req.protocol}s://${req.get('host')}`;
	res.status(StatusCodes.OK).json({
		data: {
			date: {
				created_at: '2025-02-18',
				updated_at: '2025-02-18',
			},
			descriptions: {
				app_name: 'BreakTime',
				app_description:
					'This integration reminds people to take breaks from work to prevent fatigue and burnout, increasing productivity. It also sends motivational quotes from different authors.',
				app_logo: 'https://breaktime-brnd.onrender.com',
				app_url: `${baseUrl}`,
				background_color: '#90ee90',
			},
			is_active: true,
			integration_category: 'Human Resources & Payroll',
			integration_type: 'interval',
			key_features: [
				'rests',
				'breaks',
				'productivity',
				'motivation',
				'quotes',
			],
			author: 'PeePee',
			settings: [
				{
					label: 'heading',
					type: 'text',
					required: true,
					default: 'Break Time',
				},
				{
					label: 'interval',
					type: 'text',
					required: true,
					default: '* * * * *',
				},
			],
			target_url:
				'https://ping.telex.im/v1/webhooks/019515ec-1acb-7f4c-b6f0-15bfd922e663',
			tick_url: `${baseUrl}/relax`,
		},
	});
};

router.get('/integration.json', getIntegration);

export default router;
