import { NextApiRequest, NextApiResponse } from 'next';
import { convertCurrency } from '../../lib/currencyConversion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { amount, fromCurrency, toCurrency } = req.query;

  if (!amount || !fromCurrency || !toCurrency) {
    return res.status(400).json({ message: 'Missing required query parameters' });
  }

  try {
    const convertedAmount = await convertCurrency(Number(amount), fromCurrency as string, toCurrency as string);
    res.status(200).json({ amount: convertedAmount });
  } catch (error) {
    console.error('Error converting currency:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
