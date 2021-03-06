import '../style/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { uploadBook } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();
  const addNew = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newbook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };
    dispatch(uploadBook(newbook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div className="wrap-all">
      <div className="only-head">
        <div className="add-sep" />
        <h2 className="add-title">ADD NEW BOOK</h2>
      </div>
      <div className="wrap-form">
        <form className="add-contain" onSubmit={addNew}>
          <input placeholder="Book title" name="title" id="title" required />
          <input placeholder="Author" name="author" id="author" required />
          <input placeholder="Category" name="category" id="category" required />
          <button type="submit" id="sub-btn">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default Books;
