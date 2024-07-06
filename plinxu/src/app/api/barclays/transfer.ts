import { NextApiRequest, NextApiResponse } from 'next';
import barclaysClient from '../../../lib/barclays';

interface TransferRequest {
    fromAccountId: string;
    toAccountId: string;
    amount: number;
    currency: string;
    creditorName: string;
    creditorAddress: {
      addressType: string;
      department?: string;
      subDepartment?: string;
      streetName: string;
      buildingNumber: string;
      postCode: string;
      townName: string;
      countrySubDivision?: string;
      country: string;
      addressLine?: string[];
    };
    remittanceInformation: {
      unstructured?: string;
      reference: string;
    };
  }
  
  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { fromAccountId, toAccountId, amount, currency, creditorName, creditorAddress, remittanceInformation }: TransferRequest = req.body;
  
      // Validate the input
      if (!fromAccountId || !toAccountId || !amount || !currency || !creditorName || !creditorAddress || !remittanceInformation) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      try {
        const payload = {
          Data: {
            DomesticPayments: [
              {
                InstructionIdentification: 'insIdr',
                EndToEndIdentification: 'e2eIdr',
                InstructedAmount: {
                  Amount: amount.toFixed(2),
                  Currency: currency,
                },
                CreditorAccount: {
                  SchemeName: 'SortCodeAccountNumber',
                  Identification: toAccountId,
                  Name: creditorName,
                },
                CreditorPostalAddress: {
                  AddressType: creditorAddress.addressType,
                  Department: creditorAddress.department,
                  SubDepartment: creditorAddress.subDepartment,
                  StreetName: creditorAddress.streetName,
                  BuildingNumber: creditorAddress.buildingNumber,
                  PostCode: creditorAddress.postCode,
                  TownName: creditorAddress.townName,
                  CountrySubDivision: creditorAddress.countrySubDivision,
                  Country: creditorAddress.country,
                  AddressLine: creditorAddress.addressLine,
                },
                RemittanceInformation: {
                  Unstructured: remittanceInformation.unstructured,
                  Reference: remittanceInformation.reference,
                },
              },
            ],
          },
        };
  
        const response = await barclaysClient.post('/transfers', payload);
  
        res.status(200).json(response.data);
      } catch (error) {
        console.error('Error processing transfer:', error);
        res.status(500).json({ error: 'Error processing transfer' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }