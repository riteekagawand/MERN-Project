import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Oops! Page not found.</p>
        <p className="mt-2 text-gray-600">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
