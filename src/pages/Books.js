import React from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import Navbar from '../components/Navbar';

const Books = () => (
  <div className="book-page-container d-flex flex-column">
    <Navbar />
    <BookList />
    <BookForm />
  </div>
);

export default Books;
