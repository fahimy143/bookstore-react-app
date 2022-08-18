import { Link } from 'react-router-dom';
import './style/navbar.css';
import image from './images/user.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <h1> BookStore CMS </h1>
      <Link to="/">Books</Link>
      <Link to="/Category">Categories</Link>
    </div>
    <span className="userImage"><img src={image} alt="user" /></span>
  </nav>
);

export default Navbar;
