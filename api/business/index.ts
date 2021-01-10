const express = require('express');
const router = express.Router();

router.get('/oldest', (res) => {
  res.send('oldest businesses')
});

router.get('/most-locations', (res) => {
  res.send('businesses with most locations')
});

module.exports = router;