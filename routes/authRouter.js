const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

// Middlewares
const auth = require('../middlewares/auth');

// Models
const { User } = require('../models');

const authRouter = express.Router();

const router = (title, nav) => {
  authRouter.post('/signUp', async (req, res) => {
    const { username, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    req.login(newUser, () => {
      res.redirect('/auth/profile');
    });
  });

  authRouter.get('/signIn', (req, res) => {
    res.render('auth/signIn', {
      title: `${title} - Sign In`,
      nav,
    });
  });

  authRouter.post(
    '/signIn',
    passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/',
    })
  );

  authRouter.get('/profile', auth, (req, res) => {
    res.json(req.user);
  });

  return authRouter;
};

module.exports = router;
