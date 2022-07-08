import '../style/AddBook.css';

function Books() {
  return (
    <>
      <hr className="add-sep" />
      <h2 className="add-title">ADD NEW BOOK</h2>
      <div className="add-contain">
        <input placeholder="Book title" />
        <input placeholder="Author" />
        <button type="button">ADD BOOK</button>
      </div>
    </>
  );
}

export default Books;
