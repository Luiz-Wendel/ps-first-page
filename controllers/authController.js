const passport = require('passport');
const bcrypt = require('bcrypt');

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

// Models
const { User } = require('../models');

const authController = {
  signUp: async (req, res) => {
    const { username, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    req.login(newUser, () => {
      res.redirect('/auth/profile');
    });
  },

  signIn: (req, res) => {
    res.render('auth/signIn', {
      title: `${title} - Sign In`,
      nav,
    });
  },

  signInAuth: passport.authenticate('local', {
    successRedirect: '/auth/profile',
    failureRedirect: '/',
  }),

  profile: (req, res) => {
    res.json(req.user);
  },

  logout: (req, res) => {
    req.logout();

    res.redirect('/');
  },
};

module.exports = authController;
