const ADD_BOOK = 'bookstore/src/redux/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/REMOVE_BOOK';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default booksReducer;
