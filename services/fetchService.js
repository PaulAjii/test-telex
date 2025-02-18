import axios from 'axios';

// Fetch Inspirational Quote
export const fetchQuote = async () => {
	const { data } = await axios.get(
		'https://api.realinspire.tech/v1/quotes/random'
	);

	if (!data) {
		throw new Error('Failed to fetch quote');
	}

	return { quote: data[0].content };
};
