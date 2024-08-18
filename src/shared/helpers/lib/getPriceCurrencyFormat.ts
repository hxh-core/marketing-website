export const getPriceCurrencyFormat = (currency: string) => {
	switch (currency) {
		case '₽':
			return 'RUB';
		case '€':
			return 'EUR';
		case '$':
			return 'USD';
		default:
			return 'RUB';
	}
};
