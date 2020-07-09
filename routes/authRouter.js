const express = require('express');

const { User } = require('../models');
const passport = require('passport');

const authRouter = express.Router();

const router = (title, nav) => {
  authRouter.post('/signUp', async (req, res) => {
    const { username, password } = req.body;

    const newUser = await User.create({
      username,
      password,
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

  authRouter.get('/profile', (req, res) => {
    res.json(req.user);
  });

  return authRouter;
};

module.exports = router;
