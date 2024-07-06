// lib/geolocation.ts
import axios from 'axios';

const ipstackApiKey = process.env.IPSTACK_API_KEY;

export const getLocation = async (ip: string) => {
  try {
    const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=${ipstackApiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching location:', error);
    throw new Error('Could not determine location');
  }
};
