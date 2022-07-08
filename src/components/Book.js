import '../style/Book.css';
import React from 'react';

function Book(props) {
  const me = props;
  const mee = me.books;
  return (
    <>
      <div className="book-card">
        {mee.map((i) => (
          <div key={i} className="name-wrap">
            <p className="book-title">{i.genre}</p>
            <p className="book-title">{i.title}</p>
            <p className="book-author">{i.author}</p>
            <button type="button">Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Book;
