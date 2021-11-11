import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer.books);

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
