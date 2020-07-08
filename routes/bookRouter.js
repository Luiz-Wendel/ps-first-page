const express = require('express');

const router = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false,
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false,
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false,
  },
  {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false,
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false,
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false,
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false,
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false,
  },
];

router.get('/', (req, res) => {
  res.render('books', {
    title: 'Library',
    nav: [
      {
        link: '/books',
        name: 'Books',
      },
      {
        link: '/authors',
        name: 'Authors',
      },
    ],
    books,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.render('books/single', {
    title: 'Library',
    nav: [
      {
        link: '/books',
        name: 'Books',
      },
      {
        link: '/authors',
        name: 'Authors',
      },
    ],
    book: books[id],
  });
});

module.exports = router;
