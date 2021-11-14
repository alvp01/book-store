import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookstoreAPI from '../services/BookstoreAPI';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);

  useEffect(() => {
    dispatch(BookstoreAPI.getAllBooksFromAPI());
  }, []);

  return (
    <ul className="book-list">
      {books.map((book) => {
        const currentChapter = Math.floor(Math.random() * 11);
        const totalChapters = Math.floor(Math.random() * 11 + currentChapter);
        return (
          <li key={book.id}>
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              currentChapter={currentChapter}
              totalChapters={totalChapters}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
