const express = require('express');

const authRouter = express.Router();

const router = (title, nav) => {
  authRouter.post('/signUp', (req, res) => {
    res.json(req.body);
  });

  return authRouter;
};

module.exports = router;
