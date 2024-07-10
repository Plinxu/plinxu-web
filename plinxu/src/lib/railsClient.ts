import axios from 'axios';

const railsrClient = axios.create({
  baseURL: 'https://play.railsbank.com/v2',
  headers: {
    'Authorization': `API-Key ${process.env.RAILSR_API_KEY}`, // Set your API key here
    'Content-Type': 'application/json'
  }
});

export default railsrClient;
