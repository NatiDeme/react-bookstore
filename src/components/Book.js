import '../style/Book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function Book(props) {
  const me = props;
  const mee = me.books;
  const dispatch = useDispatch();
  const removeNow = (m) => {
    dispatch(deleteBook(m));
  };
  const percentage = 66;
  return (
    <>
      <div className="book-card">
        {mee.map((i) => (
          <div key={i.item_id} className="name-wrap">
            <div className="test">
              <div className="about-book">
                <span className="book-genre">{i.category}</span>
                <span className="book-title">{i.title}</span>
                <span className="book-author">{i.author}</span>
              </div>
              <div className="sample">
                <button type="button" id="rem-btn">Comment</button>
                <div className="breaker" />
                <button type="button" onClick={() => removeNow(i.item_id)} id="rem-btn">Remove</button>
                <div className="breaker" />
                <button type="button" id="rem-btn">Edit</button>
              </div>
            </div>
            <div className="mid-percent">
              <div className="circle">
                <CircularProgressbar value={percentage} className="percent" />
                ;
              </div>
              <div className="perc-num-text">
                <span className="percentage-num">64%</span>
                <span className="completed">completed</span>
              </div>
            </div>
            <div className="big-breaker" />
            <div className="percentage">
              <span className="current-chapter">CURRENT CHAPTER</span>
              <span className="current-lesson">Chapter 17</span>
              <button type="button" className="update-progress">UPDATE PROGRESS</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Book;
