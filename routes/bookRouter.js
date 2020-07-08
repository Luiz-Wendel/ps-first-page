const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Welcome to books');
});

route.get('/single', (req, res) => {
  res.send('Welcome to single book');
});

module.exports = route;
