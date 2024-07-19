import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white text-lg hover:text-yellow-400 transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
