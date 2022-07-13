import '../style/Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const update = (e) => {
    e.preventDefault();
    dispatch(statusChecker());
  };
  return (
    <>
      <div className="button-container">
        <button type="button" className="cat-button" onClick={update}>Check Status</button>
      </div>
      <h2 className="cat-check">{ categories }</h2>
    </>
  );
}

export default Categories;
