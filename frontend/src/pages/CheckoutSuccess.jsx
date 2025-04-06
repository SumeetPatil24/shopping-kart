// frontend/src/pages/CheckoutSuccess.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome, FaBoxOpen } from "react-icons/fa";

const CheckoutSuccess = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 animate-fadeIn">
      <div className="text-center">
        <FaCheckCircle className="mx-auto text-green-500 mb-4" size={64} />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been received.</p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h2>
          <div className="border-t border-b border-gray-200 py-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-green-600">Confirmed</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            We've sent a confirmation email with all the details of your order. You can also track your order status in your account.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
            <p className="text-sm">
              <strong>Estimated Delivery:</strong> Your order will be delivered within 3-5 business days.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            <FaHome className="mr-2" /> Continue Shopping
          </Link>
          <Link
            to="/profile"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300 flex items-center justify-center"
          >
            <FaBoxOpen className="mr-2" /> View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;