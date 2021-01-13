const Express = require('express');
const axios = require('axios');

const PORT = 3333;
const app = Express();

const BASE_URL = 'https://data.lacity.org';
const DEFAULT_EXTENSION = 'json';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/oldest', async (req, res) => {
  const { data } = await api
    .get(`/resource/6rrh-rzua.${DEFAULT_EXTENSION}?$select=business_name&$group=business_name&$order=count(business_name) DESC&$limit=1`);
    // I'm not sure if I'm making a mistake but following queries return 400, which makes me think this API is terrible.
    // ?$select=business_name,naics&$group=business_name
    // ?$select=business_name,naics &$group=business_name
    // ?$select=*&$group=business_name
  res.json(data);
});

app.get('/most-locations', async (req, res) => {
  const { data } = await api
    .get(`/resource/6rrh-rzua.${DEFAULT_EXTENSION}?$order=location_start_date ASC&$limit=1`);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
