import axios from 'axios';

export async function detectUserCountry(ip: string): Promise<string> {
  const response = await axios.get(`https://api.ipdata.co/${ip}?api-key=${process.env.IPDATA_API_KEY}`);
  return response.data.country_code;
}
