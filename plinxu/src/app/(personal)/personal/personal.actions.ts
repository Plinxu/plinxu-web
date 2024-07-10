'use server';

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "@/lib/utils";
import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from "plaid";

import { plaidClient } from '@/lib/plaid';
import { revalidatePath } from "next/cache";
import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";
import railsrClient from '@/lib/railsClient';
import { prisma } from "@/lib/prisma";
import { currentUser, auth } from "@clerk/nextjs/server";
import { toast } from "sonner";
import { PersonalSchema, PersonalType } from "./personal.schema";
import { PrismaClient } from "@prisma/client";


const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    )

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error)
  }
}



export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId }) 

    return parseStringify(user);
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, firstName, lastName } = userData;
  
  let newUserAccount;

  try {
    const { account, database } = await createAdminClient();

    newUserAccount = await account.create(
      ID.unique(), 
      email, 
      password, 
      `${firstName} ${lastName}`
    );

    if(!newUserAccount) throw new Error('User ALready Exists')

    const dwollaCustomerUrl = await createDwollaCustomer({
      ...userData,
      type: 'personal'
    })

    if(!dwollaCustomerUrl) throw new Error('Error creating Dwolla customer')

    const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

    const newUser = await database.createDocument(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        ...userData,
        userId: newUserAccount.$id,
        dwollaCustomerId,
        dwollaCustomerUrl
      }
    )

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.error('Error', error);
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();

    const user = await getUserInfo({ userId: result.$id})

    return parseStringify(user);
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}

export const createLinkToken = async (user: User) => {
  try {
    const tokenParams = {
      user: {
        client_user_id: user.$id
      },
      client_name: `${user.firstName} ${user.lastName}`,
      products: ['auth'] as Products[],
      language: 'en',
      country_codes: ['US'] as CountryCode[],
    }

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return parseStringify({ linkToken: response.data.link_token })
  } catch (error) {
    console.log(error);
  }
}



export const exchangePublicToken = async ({
  publicToken,
}: exchangePublicTokenProps) => {
  const user = await currentUser()
  try {
    // Exchange public token for access token and item ID
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });


    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    
    // Get account information from Plaid using the access token
    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountsResponse.data.accounts[0];

    // Create a processor token for Dwolla using the access token and account ID
    const request: ProcessorTokenCreateRequest = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
    };

    const processorTokenResponse = await plaidClient.processorTokenCreate(request);
    const processorToken = processorTokenResponse.data.processor_token;

     // Create a funding source URL for the account using the Dwolla customer ID, processor token, and bank name
     const fundingSourceUrl = await addFundingSource({
      dwollaCustomerId: user?.id as any,
      processorToken,
      bankName: accountData.name,
    });
    
    // If the funding source URL is not created, throw an error
    if (!fundingSourceUrl) throw Error;

    // Create a bank account using the user ID, item ID, account ID, access token, funding source URL, and shareableId ID
   await prisma.bankAccount.create({
      data: {
        userId: user?.id,
      bankId: itemId,
      accountId: accountData.account_id,
      accessToken,
      fundingSourceUrl,
      shareableId: encryptId(accountData.account_id),
      }
    });

    // Revalidate the path to reflect the changes
    revalidatePath("/");

    // Return a success message
    return parseStringify({
      publicTokenExchange: "complete",
    });
  } catch (error) {
    console.error("An error occurred while creating exchanging token:", error);
  }
}

export const getBanks = async ({ userId }: getBanksProps) => {
  try {
    const { database } = await createAdminClient();

    const banks = await database.listDocuments(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    )

    return parseStringify(banks.documents);
  } catch (error) {
    console.log(error)
  }
}

export const getBank = async ({ documentId }: getBankProps) => {
  try {
    const { database } = await createAdminClient();

    const bank = await database.listDocuments(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      [Query.equal('$id', [documentId])]
    )

    return parseStringify(bank.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export const getBankByAccountId = async ({ accountId }: getBankByAccountIdProps) => {
  try {
    const { database } = await createAdminClient();

    const bank = await database.listDocuments(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      [Query.equal('accountId', [accountId])]
    )

    if(bank.total !== 1) return null;

    return parseStringify(bank.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export const createRailsrUser = async (data: PersonalType) => {
  const validation = PersonalSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("form not valid");
  }

  const user = await currentUser()

  if (!user) {
    toast.error('user not found')
  }

  const {name, country, currency, nationality, gender,DOB, city, employment, state, postalcode,isApproved , signature, middleName, occupation  } = data


  const requestBody = {
    taxResidences: data.country,
    accountUsage: ['sendAndReceiveMoneyTransfers', 'digitalWallet'],
    citizenships: data.nationality,
    riskScore: 'low',
    lastName: user?.lastName,
    dateOfBirth: data.DOB,
    gender: data.gender,
    email: user?.emailAddresses[0].emailAddress,
    placeOfBirthCountry: data.nationality,
    firstName: user?.firstName,
    middleNames: data.middleName,
    telephone: user?.phoneNumbers,
    metadata: data.info,
    occupation: data.occupation,
    type: "person",
    placeOfBirthCity: data.city,
    isPep: false,
    expectedVolume: '0-5000',
    employmentStatus: data.employment,
    residentialAddress: data.Address
  };

  try {
    const response = await railsrClient.post('/endusers', requestBody);
    return response.data;
  } catch (error) {
    console.error('Error creating Railsr user:', error);
    throw error;
  }
};

export const onBoarding = async (data: PersonalType) => {

  const validation = PersonalSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("form not valid");
  }

  const user = await currentUser()

  if (!user) {
    toast.error('user not found')
  }
  const {name, country, currency, nationality, gender,DOB, city, employment, state, postalcode,isApproved , signature  } = data

  const onboard = await prisma.user.update({
    where: {
      id: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      firstName: user?.firstName,
      lastName: user?.lastName,
      gender: data.gender,
      DOB: data.DOB as any,
      city: data.city,
      employment: data.employment,
      state: data.state,
      postalcode: data.postalcode
    },
    data: {
      city,
      postalcode,
      state,
      employment,
      gender,
      signature,
      nationality,
      currency,
      country,
      DOB
    }  

  })
  await createRailsrUser(data)


  return onboard;
}

export const createLinkTokens = async (data: PersonalType) => {
  const user = await currentUser()

  if (!user) {
    toast.error('user not found')
  }
  const {name, country, currency, nationality, gender,DOB, city, employment, state, postalcode,isApproved , signature  } = data

  try {
    const tokenParams = {
      user: {
        client_user_id: user?.id as any
      },
      client_name: `${user?.firstName} ${user?.lastName}`,
      products: ['auth'] as Products[],
      language: 'en',
      country_codes: ['US'] as CountryCode[],
    }

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return parseStringify({ linkToken: response.data.link_token })
  } catch (error) {
    console.log(error);
  }
}


export const createBankAccounts = async ({
  userId,
  bankId,
  accountId,
  accessToken,
  fundingSourceUrl,
  shareableId,
}: createBankAccountProps) => {
  try {

    const bankAccount = await prisma.bankAccount.create({
        data:{
          userId,
          bankId,
        accountId,
        accessToken,
        fundingSourceUrl,
        shareableId,
        }
      })

    return parseStringify(bankAccount);
  } catch (error) {
    console.log(error);
  }
}



