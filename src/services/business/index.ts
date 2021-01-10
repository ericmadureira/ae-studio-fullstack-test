import axios from 'axios';

import { Business } from './types';

const BASE_URL = 'https://data.lacity.org/';
const DEFAULT_EXTENSION = 'json';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const getOldestBusiness = (): Promise<Business> => api
  .get(`resource/6rrh-rzua.${DEFAULT_EXTENSION}`)
  .then(res => res.data);
