const { Book } = require('../models');

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

const bookController = {
  index: async (req, res) => {
    const books = await Book.findAll();

    res.render('books', {
      title,
      nav,
      books,
    });
  },

  show: async (req, res) => {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    res.render('books/single', {
      title,
      nav,
      book,
    });
  },
};

module.exports = bookController;
