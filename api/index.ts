const express = require('express');

var business = require('./business');

export const app = express();

app.use('/business', business);