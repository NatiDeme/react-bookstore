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

  // const hndleMyBooks = (e) => {
  //   setMyBook((mybook) => ({
  //     ...mybook,
  //     id: uuidv4(),
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  return (
    <>
      <hr className="add-sep" />
      <h2 className="add-title">ADD NEW BOOK</h2>
      <div>
        <form className="add-contain" onSubmit={addNew}>
          <input placeholder="Book title" name="title" id="title" required />
          <input placeholder="Author" name="author" id="author" required />
          <input placeholder="Category" name="category" id="category" required />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </>
  );
}

export default Books;
