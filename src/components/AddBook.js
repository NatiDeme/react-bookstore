import '../style/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();
  const newbook = {
    id: '',
    title: '',
    author: '',
  };
  const [mybook, setMyBook] = useState(newbook);
  const addNew = () => {
    dispatch(addBook(mybook));
    setMyBook((mybook) => ({
      ...mybook,
      title: '',
      author: '',
    }));
  };

  const hndleMyBooks = (e) => {
    setMyBook((mybook) => ({
      ...mybook,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <hr className="add-sep" />
      <h2 className="add-title">ADD NEW BOOK</h2>
      <div className="add-contain">
        <input placeholder="Book title" name="title" id="title" onChange={hndleMyBooks} value={mybook.title} />
        <input placeholder="Author" name="author" id="author" onChange={hndleMyBooks} value={mybook.author} />
        <button type="button" onClick={addNew}>ADD BOOK</button>
      </div>
    </>
  );
}

export default Books;
