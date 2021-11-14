import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import BookstoreAPI from '../services/BookstoreAPI';

const BookForm = () => {
  const [fieldValue, setValue] = useState({
    author: '',
    title: '',
    category: 'Action',
  });
  const dispatch = useDispatch();
  const changeInput = (e) => {
    setValue({
      ...fieldValue,
      [e.target.name]: e.target.value,
    });
  };
  const addBookToList = (event) => {
    event.preventDefault();
    if (fieldValue.title.trim() && fieldValue.author.trim()) {
      const newBook = {
        id: uuidv4(),
        title: fieldValue.title,
        author: fieldValue.author,
        category: fieldValue.category,
      };
      dispatch(BookstoreAPI.addBooktoAPI(newBook));
      setValue({
        author: '',
        title: '',
        category: 'Action',
      });
      dispatch(BookstoreAPI.getAllBooksFromAPI());
    }
  };

  return (
    <div className="form-container d-flex flex-column w-100">
      <h2>ADD NEW BOOK</h2>
      <form className="d-flex flex-row w-100">

        <input
          type="text"
          placeholder="Book title"
          value={fieldValue.title}
          onChange={changeInput}
          name="title"
          required
        />

        <input
          type="text"
          placeholder="Book author"
          value={fieldValue.author}
          name="author"
          onChange={changeInput}
          required
        />
        <div>
          <select
            value={fieldValue.category}
            name="category"
            onChange={changeInput}
          >
            <option>Action</option>
            <option>Classics</option>
            <option>Graphic Novel</option>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Horror</option>
            <option>Economy</option>
          </select>
        </div>

        <button type="submit" className="add-book-btn btn" onClick={addBookToList}>
          ADD BOOK
        </button>

      </form>
    </div>
  );
};

export default BookForm;
