// frontend/src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-700 transition duration-300"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;