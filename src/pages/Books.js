import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const books = useSelector((state) => state.book.books);
  return (
    <>
      <Book books={books} />
      <AddBook />
    </>
  );
}

export default Books;
