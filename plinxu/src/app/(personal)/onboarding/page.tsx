import SumsubWebSdk from '@sumsub/websdk-react'
import { EventPayload } from '@sumsub/websdk/types/types';

const accessToken = process.env.acessToken as string;
const accessTokenExpirationHandler = process.env.acessTokenExpirationHandler as any;
const configs = process.env.acessToken as any;
const option = process.env.option as any;



<SumsubWebSdk
  accessToken={accessToken}
  expirationHandler={accessTokenExpirationHandler}
  config={configs}
  options={option}
  onMessage={messageHandler}
  onError={errorHandler}
/>

function messageHandler<EventType extends any>(): void {
    throw new Error('Function not implemented.');
}
function errorHandler(error: any): void {
    throw new Error('Function not implemented.');
}

