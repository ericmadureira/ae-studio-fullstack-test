import axios from 'axios';

import { Business } from './types';

const BASE_URL = 'https://data.lacity.org/';
const DEFAULT_EXTENSION = 'json';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const fetchMostLocationsBusinesses = (): Promise<Business[]> => api
  .get(`resource/6rrh-rzua.${DEFAULT_EXTENSION}`)
  .then(res => res.data);

export const fetchOldestBusiness = (): Promise<Business> => api
  .get(`resource/6rrh-rzua.${DEFAULT_EXTENSION}?$order=location_start_date ASC&$limit=1`)
  .then(res => res.data);
