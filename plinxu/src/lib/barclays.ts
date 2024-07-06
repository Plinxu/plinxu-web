import axios from 'axios';

const barclaysClient = axios.create({
  baseURL: 'https://api.barclays.com/',
  headers: {
    'Authorization': `Bearer ${process.env.BARCLAYS_API_KEY}`,
  },
});

export default barclaysClient;
