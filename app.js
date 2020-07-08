const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const title = 'Library';
const nav = [
  {
    link: '/books',
    name: 'Books',
  },
  {
    link: '/authors',
    name: 'Authors',
  },
];

// Routes
const bookRouter = require('./routes/bookRouter')(title, nav);

// Print requests on terminal
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title,
    nav,
  });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}...`);
});
