const express = require('express');

const { Book } = require('../models');

const bookRouter = express.Router();

const router = (title, nav) => {
  bookRouter.get('/', async (req, res) => {
    const books = await Book.findAll();

    res.render('books', {
      title,
      nav,
      books,
    });
  });

  bookRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    res.render('books/single', {
      title,
      nav,
      book,
    });
  });

  return bookRouter;
};

module.exports = router;
