const express = require('express');

const authRouter = express.Router();

const router = (title, nav) => {
  authRouter.post('/signUp', (req, res) => {
    req.login(req.body, () => {
      res.redirect('/auth/profile');
    });
  });

  authRouter.get('/profile', (req, res) => {
    res.json(req.user);
  });

  return authRouter;
};

module.exports = router;
