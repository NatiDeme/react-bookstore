import '../style/Book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const me = props;
  const mee = me.books;
  const dispatch = useDispatch();
  const removeNow = (m) => {
    dispatch(removeBook(m));
  };

  return (
    <>
      <div className="book-card">
        {mee.map((i) => (
          <div key={i.id} className="name-wrap">
            <p className="book-title">{i.genre}</p>
            <p className="book-title">{i.title}</p>
            <p className="book-author">{i.author}</p>
            <button type="button" onClick={() => removeNow(i)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Book;
