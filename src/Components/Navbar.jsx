import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <ul className="flex justify-around list-none m-0 p-0">
        <li>
          <Link to="/" className="text-white no-underline text-lg">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white no-underline text-lg">About</Link>
        </li>
        <li>
          <Link to="/services" className="text-white no-underline text-lg">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white no-underline text-lg">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
