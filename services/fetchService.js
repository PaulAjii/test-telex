// Fetch Inspirational Quote
export const fetchQuote = async () => {
	const response = await fetch(
		'https://api.realinspire.tech/v1/quotes/random'
	);

	if (!response.ok) {
		throw new Error('Failed to fetch quote');
	}

	const data = await response.json();

	return { quote: data[0].content, author: data[0].author };
};
