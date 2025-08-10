const bookService = require('../services/bookService');

const addBook = (req, res) => {
    const {title, author, year, genre} = req.body;

    const book = bookService.addBook({title, author, year, genre});
    res.status(201).json(book);
}

const getBooks = (req, res) =>{
    const {sortBy, order, filterBy, filterValue } = req.query;
    const books = bookService.getBooks({sortBy, order, filterBy, filterValue });
    res.status(200).json(books);
}

const getBookById = (req, res) => {
    const {id} = req.params;
    const book = bookService.getBookById(id);
    res.status(200).json(book);
};


const updateBook = (req, res) => {
    const {id} = req.params;
    const {title, author, year, genre} = req.body;
    const book = bookService.updateBook(id, {title, author, year, genre});
    res.status(200).json(book);
}

const deleteBook = (req, res) => {
    const {id} = req.params;
    bookService.deleteBook(id);
    res.status(204).send();
}

module.exports = {
    addBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};