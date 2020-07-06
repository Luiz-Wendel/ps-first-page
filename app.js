const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// Print requests on terminal
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Library', list: ['a', 'b', 'c'] });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}...`);
});
