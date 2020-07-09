const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// DB
const db = require('./models');

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

// Routers
const authRouter = require('./routes/authRouter')(title, nav);
const bookRouter = require('./routes/bookRouter');

// Print requests on terminal
app.use(morgan('tiny'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

require('./configs/passport.js')(app);

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/auth', authRouter);
app.use('/books', bookRouter);

app.get('/', (_req, res) => {
  res.render('index', {
    title,
    nav,
  });
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}...`);
  });
});
