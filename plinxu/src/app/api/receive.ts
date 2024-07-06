import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { convertCurrency } from '../../lib/currencyConversion';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId, amount, currency, source } = req.body;

  try {
    if (!userId || !amount || !currency || !source) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let convertedAmount = amount;
    let convertedCurrency = currency;

    if (currency !== user.localCurrency) {
      convertedAmount = await convertCurrency(amount, currency, user.localCurrency);
      convertedCurrency = user.localCurrency;
    }

    const transaction = await prisma.transaction.create({
      data: {
        userId,
        amount,
        currency,
        convertedAmount,
        convertedCurrency,
        type: 'deposit',
        source,
        status: 'pending',
      },
    });

    let response;
    if (source === 'barclays') {
      response = await axios.post(process.env.BARCLAYS_API_ENDPOINT, {
        amount,
        currency,
        accountNumber: user.accountNumber,
      }, {
        headers: { 'Authorization': `Bearer ${process.env.BARCLAYS_API_KEY}` },
      });
    } else if (source === 'wells_fargo') {
      response = await axios.post(process.env.WELLS_FARGO_API_ENDPOINT, {
        amount,
        currency,
        accountNumber: user.accountNumber,
      }, {
        headers: { 'Authorization': `Bearer ${process.env.WELLS_FARGO_API_KEY}` },
      });
    } else {
      return res.status(400).json({ message: 'Invalid source' });
    }

    const status = response.data.success ? 'completed' : 'failed';
    await prisma.transaction.update({
      where: { id: transaction.id },
      data: { status },
    });

    if (status === 'completed') {
      await prisma.personalAccount.update({
        where: { userId },
        data: { balance: { increment: convertedAmount } },
      });
    }

    res.status(200).json({ transaction, status });
  } catch (error) {
    console.error('Error processing deposit:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
