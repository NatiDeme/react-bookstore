import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const state = {
    books: [
      {
        id: 1,
        genre: 'Self Development',
        title: 'The power of Habit',
        author: 'James Clear',
      },
    ],
  };
  return (
    <>
      <Book books={state.books} />
      <AddBook />
    </>
  );
}

export default Books;
