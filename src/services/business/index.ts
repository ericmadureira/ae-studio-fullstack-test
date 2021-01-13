import axios from 'axios';

import { Business } from './types';

const BASE_URL = 'http://localhost:3333';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

/*
  By simply requesting the endpoint '/resource/6rrh-rzua' it would be returned a thousand businesses data.
  The test asked me to fetch those items and aggregate them using JS methods to reach the intended result.
  I did it using the API filters but here goes the same using vanilla JS.
*/

/*
  fetchMostLocationsBusiness()

  Assumptions:
  - It doesn't seem to exist a unique id for different locations of a same business, so I'll be using business_name as such.

  1. We can do the "group by" operation in JS using the reduce method for arrays. More in the link below
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#grouping_objects_by_a_property
  const businesses = fetchList(...);
  const groupBy = (array, property) => {
    return array.reduce((accumulator, object) => {
      let key = object[property];
      accumulator[key] = (accumulator[key] || []).push(object);
      return accumulator;
    }, {});
  };
  const businessesGroupedByLocation = groupBy(businesses, 'business_name');

  2. Then we take the object result and sort it's entries by entry[1].length (number of locations).
  const sortedBusinesses = Object.entries(businessesGroupedByLocation).sort((a, b) => a[1].length - b[1].length);

  3. Get the first
  const mostLocationsBusinesses = sortedBusinesses[0];
*/
export const fetchMostLocationsBusiness = (): Promise<Business[]> => api
  .get('/oldest')
  .then(res => res.data);

/*
  fetchOldestBusiness()

  To obtain the oldest business without help from the API, just sort the array by location_start_date
  and get the first element of the array.
  res.data.sort(a,b => a.location_start_date - b.location_start_date)[0]
*/
export const fetchOldestBusiness = (): Promise<Business> => api
  .get('/most-locations')
  .then(res => res.data);
