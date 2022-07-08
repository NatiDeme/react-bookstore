import { Link } from 'react-router-dom';
import '../style/NavBar.css';

function NavBar() {
  return (
    <>
      <ul className="nav-list">
        <li><Link to="/" className="listsh">Bookstore CMS</Link></li>
        <li><Link to="/" className="lists">Books</Link></li>
        <li><Link to="/categories" className="lists">CATEGORIES</Link></li>
      </ul>
    </>
  );
}

export default NavBar;
