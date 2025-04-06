// // frontend/src/components/common/Footer.jsx
// import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-blue-600 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">ShopCart</h3>
//             <p className="text-blue-100">
//               Your one-stop shop for all your shopping needs. Quality products at affordable prices, delivered with exceptional service.
//             </p>
//             <div className="mt-4 flex space-x-4">
//               <a href="#" className="text-blue-100 hover:text-white transition duration-300">
//                 <FaFacebook size={24} />
//               </a>
//               <a href="#" className="text-blue-100 hover:text-white transition duration-300">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="#" className="text-blue-100 hover:text-white transition duration-300">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="text-blue-100 hover:text-white transition duration-300">
//                 <FaGithub size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/cart" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Cart
//                 </a>
//               </li>
//               <li>
//                 <a href="/login" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Login
//                 </a>
//               </li>
//               <li>
//                 <a href="/register" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Register
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Categories</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/?category=Electronics" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Electronics
//                 </a>
//               </li>
//               <li>
//                 <a href="/?category=Clothing" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Clothing
//                 </a>
//               </li>
//               <li>
//                 <a href="/?category=Kitchen" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Kitchen
//                 </a>
//               </li>
//               <li>
//                 <a href="/?category=Accessories" className="text-blue-100 hover:text-white transition duration-300 flex items-center">
//                   <span className="mr-2">›</span> Accessories
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Contact Us</h3>
//             <ul className="space-y-3 text-blue-100">
//               <li className="flex items-start">
//                 <FaMapMarkerAlt className="mt-1 mr-3" />
//                 <span>123 Shopping Street, Retail City, RC 10001</span>
//               </li>
//               <li className="flex items-center">
//                 <FaPhone className="mr-3" />
//                 <span>(123) 456-7890</span>
//               </li>
//               <li className="flex items-center">
//                 <FaEnvelope className="mr-3" />
//                 <span>info@shopcart.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-blue-400 text-center text-blue-100">
//           <p>&copy; {currentYear} ShopCart. All rights reserved.</p>
//           <p className="mt-2 text-sm">
//             <a href="#" className="hover:text-white">Privacy Policy</a> | 
//             <a href="#" className="hover:text-white ml-2">Terms of Service</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaShoppingBag,
  FaCreditCard,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-indigo-900 text-white pt-16 pb-8">
      {/* Newsletter signup */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-indigo-800 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-indigo-200">Get the latest updates, deals and exclusive offers</p>
            </div>
            <form className="flex flex-col sm:flex-row w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-lg md:w-64 focus:outline-none text-gray-800"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300 mt-2 sm:mt-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <FaShoppingBag className="mr-2 text-amber-400" size={24} />
              <h3 className="text-xl font-bold">ShopCart</h3>
            </div>
            <p className="text-indigo-200 mb-4">
              Your one-stop destination for quality products at affordable prices. We aim to provide an exceptional
              shopping experience with fast delivery and dedicated customer service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-indigo-200 hover:text-amber-400 transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-indigo-200 hover:text-amber-400 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-indigo-200 hover:text-amber-400 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-indigo-200 hover:text-amber-400 transition duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-amber-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-indigo-200 hover:text-amber-400 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-indigo-200 hover:text-amber-400 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-indigo-200 hover:text-amber-400 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-indigo-200 hover:text-amber-400 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Login/Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaTruck className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">Free shipping on orders over $50</span>
              </li>
              <li className="flex items-start">
                <FaCreditCard className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">Secure payment processing</span>
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">30-day money-back guarantee</span>
              </li>
              <li className="flex items-start">
                <FaShoppingBag className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">Premium quality products</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">123 Shopping Street, Retail City, RC 10001</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-amber-400" />
                <span className="text-indigo-200">support@shopcart.com</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-indigo-700">
              <p className="text-indigo-200">Customer Service Hours:</p>
              <p className="text-indigo-200">Monday to Friday: 9am - 6pm</p>
              <p className="text-indigo-200">Weekends: 10am - 4pm</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800 text-center">
          <div className="flex flex-wrap justify-center mb-4">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8 m-2" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" className="h-8 m-2" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="PayPal" className="h-8 m-2" />
            <img
              src="https://cdn-icons-png.flaticon.com/128/196/196565.png"
              alt="American Express"
              className="h-8 m-2"
            />
          </div>
          <p className="text-indigo-300">&copy; {currentYear} ShopCart. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="text-indigo-300 hover:text-amber-400 transition duration-300">
              Privacy Policy
            </a>
            <span className="text-indigo-600">|</span>
            <a href="#" className="text-indigo-300 hover:text-amber-400 transition duration-300">
              Terms of Service
            </a>
            <span className="text-indigo-600">|</span>
            <a href="#" className="text-indigo-300 hover:text-amber-400 transition duration-300">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer