import { Link } from 'react-router-dom';
import { SiGoogletasks } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="bg-black p-4 shadow-md h-[60px] mt-[30px] w-[1000px] rounded-[70px]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            <Link to="/" className="flex font-roboto">
              Job Tracker <SiGoogletasks className="mt-[4px] ml-[8px]" />
            </Link>
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
    </div>
  );
};

export default Navbar;
