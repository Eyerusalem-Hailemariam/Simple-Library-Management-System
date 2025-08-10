const {sortData, filterData} = require('../utils/sortAndFilter');

let books = [];
let nextId = 1;

const addBook = (bookData) => {
    const newBook = {id: nextId++, ...bookData};
    books.push(newBook);
    return newBook;
}
const getBooks = ({ sortBy, order, filterBy, filterValue}) => {
    let result = [...books];
    if(filterBy && filterValue) {
        result = filterData(result, filterBy, filterValue);
    }
    if(sortBy){
        result = sortData(result, sortBy, order);
    }
    return result;
}

const getBookById = (id) => {
    return books.find(b => b.id === parseInt(id));
};

const updateBook = (id, updatedFields) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(id));
    if( bookIndex === -1) return null;
    books[bookIndex] = {...books[bookIndex], ...updatedFields};
    return books[bookIndex];
}

const deleteBook = (id) => {
    const initialLength = books.length;
    books = books.filter(b => b.id !== parseInt(id));
    return books.length < initialLength;
};

module.exports = {
    addBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};
