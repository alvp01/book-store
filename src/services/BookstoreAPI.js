import axios from 'axios';
import { getBooks, addBook, removeBook } from '../redux/books/books';

export default class BookstoreAPI {
  static #BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  static #APP_ID = '0KTZZugyDjVCAV43NKj3';

  static addBooktoAPI = (book) => async (dispatch) => {
    const url = `${this.#BASE_URL}/apps/${this.#APP_ID}/books`;
    const {
      id, title, author, category,
    } = book;
    const APIbook = {
      item_id: id,
      category,
      title: `${title} - ${author}`,
    };
    await axios.post(url, APIbook);
    dispatch(addBook(book));
  };

  static deleteBookFromAPI = (id) => async (dispatch) => {
    const url = `${this.#BASE_URL}/apps/${this.#APP_ID}/books/${id}`;
    const body = {
      item_id: id,
    };
    await axios.delete(url, body);
    dispatch(removeBook(id));
  };

  static getAllBooksFromAPI = () => async (dispatch) => {
    const url = `${this.#BASE_URL}/apps/${this.#APP_ID}/books`;
    const response = await axios.get(url);
    const books = [];
    Object.entries(response.data).forEach(([id, info]) => {
      const { title: APItitle, category } = info[0];
      const [title, author] = APItitle.split(' - ');
      const newBook = {
        id,
        title,
        category,
        author,
      };
      books.push(newBook);
    });
    dispatch(getBooks(books));
  };
}
