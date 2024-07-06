import axios from 'axios';

export async function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Promise<number> {
  const response = await axios.get(`${process.env.OPEN_EXCHANGE_RATES_API_ENDPOINT}`, {
    params: {
      app_id: process.env.OPEN_EXCHANGE_RATES_API_KEY,
      base: fromCurrency,
      symbols: toCurrency,
    },
  });

  const rates = response.data.rates;
  if (!rates[toCurrency]) {
    throw new Error(`Unable to get rate for currency: ${toCurrency}`);
  }

  const conversionRate = rates[toCurrency];
  return amount * conversionRate;
}
