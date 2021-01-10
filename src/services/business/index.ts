import axios from 'axios';

export const getOldestBusiness = async () => {
  return await axios.get('https://data.lacity.org/resource/6rrh-rzua.json');
};
