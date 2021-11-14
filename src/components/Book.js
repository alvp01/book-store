import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import BookstoreAPI from '../services/BookstoreAPI';

const Book = ({
  id, category, title, author, currentChapter, totalChapters,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(BookstoreAPI.deleteBookFromAPI(id));
    dispatch(BookstoreAPI.getAllBooksFromAPI());
  };
  const progressPercentage = Math.round((currentChapter / totalChapters) * 100);
  return (
    <div className="book-container d-flex flex-row">
      <div className="d-flex flex-column book-info">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">
          {title}
        </h2>
        <h4 className="book-author">{author}</h4>
        <div className="d-flex flex-row">
          <button type="button" className="btn-link">Comments</button>
          <button type="button" onClick={handleClick} className="btn-link">Remove</button>
          <button type="button" className="btn-link">Edit</button>
        </div>
      </div>
      <div className="book-progress d-flex flex-row">
        <div className="progress d-flex flex-row">
          <AiOutlineLoading3Quarters />
          <div className="completion-container">
            <p className="completion-number">
              {`${progressPercentage}%`}
            </p>
            <p className="completed">
              completed
            </p>
          </div>
        </div>
        <div className="d-flex flex-column book-progress">
          <div className="current-chapter">Current Chapter</div>
          <div className="book-chapter">{`Chapter ${currentChapter}`}</div>
          <button type="button" className="btn btn-progress">Update progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currentChapter: PropTypes.number.isRequired,
  totalChapters: PropTypes.number.isRequired,
};

export default Book;
