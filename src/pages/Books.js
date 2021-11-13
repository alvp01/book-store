import React from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const Books = () => (
  <div className="book-page-container d-flex flex-column border-box w-100">
    <BookList />
    <BookForm />
  </div>
);

export default Books;
