import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Container">
      <nav>
        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/framer">Framer</Link>
          </li>
          <li>
            <Link to="/swiper">Swiper</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
