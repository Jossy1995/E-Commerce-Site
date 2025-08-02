import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hopme Page</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/clothing">Cloth</Link></li>
         <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
