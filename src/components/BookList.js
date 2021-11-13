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
    <ul className="list-unstyled row mx-0 g-0 gy-3">
      {books.map((book) => {
        const currentChapter = Math.floor(Math.random() * 11);
        return (
          <li key={book.id}>
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              currentChapter={currentChapter}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
