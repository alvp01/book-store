const ADD_BOOK = 'bookstore/src/redux/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/SET_ALL_BOOKS';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { books: action.payload };
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default booksReducer;
