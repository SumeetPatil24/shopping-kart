// frontend/src/components/admin/AdminSidebar.jsx
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaPlus, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = () => {
  const { logout } = useAuth();

  const navItems = [
    { path: '/admin', icon: <FaChartLine />, label: 'Dashboard' },
    { path: '/admin/products', icon: <FaBox />, label: 'Products' },
    { path: '/admin/products/add', icon: <FaPlus />, label: 'Add Product' },
    { path: '/', icon: <FaHome />, label: 'Back to Shop' },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      
      <nav className="mt-8">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300 ${
                    isActive ? 'bg-gray-800 text-white' : ''
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
          
          <li className="px-4 pt-6">
            <button
              onClick={logout}
              className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300"
            >
              <span className="mr-3"><FaSignOutAlt /></span>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;