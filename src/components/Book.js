import PropTypes from 'prop-types';

const Book = ({
  category, title, author, currentChapter,
}) => (
  <div className="book-container">
    <div className="book-info">
      <h3 className="book-category">{category}</h3>
      <h2 className="book-title">
        {' '}
        {title}
      </h2>
      <h4 className="book-author">{author}</h4>
      <div className="options">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <div className="progress" />
      <div className="current-chapter">Current Chapter</div>
      <div className="book-chapter">{currentChapter}</div>
      <button type="button">Update progress</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default Book;
