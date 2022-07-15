import { Link } from 'react-router-dom';
import '../style/NavBar.css';

function NavBar() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li><Link to="/" className="listsh">Bookstore CMS</Link></li>
        <li><Link to="/" className="lists">BOOKS</Link></li>
        <li><Link to="/categories" className="lists cate">CATEGORIES</Link></li>
      </ul>
      <div className="image-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" className="image" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default NavBar;
