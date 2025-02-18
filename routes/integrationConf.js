import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

const getIntegration = (req, res) => {
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
				app_url: 'https://breaktime-brnd.onrender.com',
				background_color: '#fff',
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
					label: 'interval',
					type: 'text',
					required: true,
					default: '* * * * *',
				},
				{
					label: 'heading',
					type: 'text',
					required: true,
					default: 'Break Time',
				},
			],
			target_url:
				'https://ping.telex.im/v1/webhooks/019515ec-1acb-7f4c-b6f0-15bfd922e663',
			tick_url: 'https://breaktime-brnd.onrender.com/api/v1/relax',
		},
	});
};

router.get('/integration.json', getIntegration);

export default router;
