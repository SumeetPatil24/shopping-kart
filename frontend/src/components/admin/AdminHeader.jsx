// frontend/src/components/admin/AdminHeader.jsx
import { useState } from 'react';
import { FaBars, FaBell, FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const AdminHeader = () => {
  const { user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="md:hidden mr-4 text-gray-600 hover:text-gray-900">
            <FaBars size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 relative">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="relative">
            <button 
              className="flex items-center space-x-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                {user?.profilePicture ? (
                  <img 
                    src={user.profilePicture || "/placeholder.svg"} 
                    alt={user.username} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <FaUser className="text-gray-600" />
                )}
              </div>
              <span className="text-gray-800 font-medium hidden md:block">
                {user?.username || 'Admin'}
              </span>
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a 
                  href="#" 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Settings
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;