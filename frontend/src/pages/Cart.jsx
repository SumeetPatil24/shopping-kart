// // frontend/src/pages/Cart.jsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaTrash, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
// import { useCart } from '../context/CartContext';
// import LoadingSpinner from '../components/common/LoadingSpinner';

// const Cart = () => {
//   const { cart, loading, updateCartItem, removeFromCart, clearCart, getCartTotal } = useCart();
//   const [checkoutLoading, setCheckoutLoading] = useState(false);

//   const handleQuantityChange = (itemId, quantity) => {
//     updateCartItem(itemId, quantity);
//   };

//   const handleRemoveItem = (itemId) => {
//     removeFromCart(itemId);
//   };

//   const handleClearCart = () => {
//     clearCart();
//   };

//   const handleCheckout = () => {
//     setCheckoutLoading(true);

//     // Simulate checkout process
//     setTimeout(() => {
//       alert("Checkout functionality would be implemented here in a real application");
//       setCheckoutLoading(false);
//       clearCart();
//     }, 2000);
//   };

//   if (loading) return <LoadingSpinner />;

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
//         <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
//           <FaArrowLeft className="mr-2" /> Continue Shopping
//         </Link>
//       </div>

//       {cart.length === 0 ? (
//         <div className="text-center py-12 bg-white rounded-lg shadow-md">
//           <FaShoppingBag className="mx-auto text-gray-300 mb-4" size={64} />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
//           <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
//           <Link
//             to="/"
//             className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             Start Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Product
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Price
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Quantity
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Total
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {cart.map((item) => (
//                   <tr key={item.item._id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
//                           {item.item.imageUrl ? (
//                             <img
//                               src={item.item.imageUrl || "/placeholder.svg"}
//                               alt={item.item.title}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="h-full w-full bg-gray-200 flex items-center justify-center">
//                               <span className="text-gray-500 text-xs">No image</span>
//                             </div>
//                           )}
//                         </div>
//                         <div className="ml-4">
//                           <Link
//                             to={`/products/${item.item._id}`}
//                             className="text-gray-900 font-medium hover:text-gray-600"
//                           >
//                             {item.item.title}
//                           </Link>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-900">${item.item.price.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <button
//                           onClick={() => handleQuantityChange(item.item._id, item.quantity - 1)}
//                           className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
//                           disabled={item.quantity <= 1}
//                         >
//                           -
//                         </button>
//                         <input
//                           type="number"
//                           min="1"
//                           value={item.quantity}
//                           onChange={(e) => handleQuantityChange(item.item._id, parseInt(e.target.value))}
//                           className="mx-2 border text-center w-12 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         />
//                         <button
//                           onClick={() => handleQuantityChange(item.item._id, item.quantity + 1)}
//                           className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-900">
//                       ${(item.item.price * item.quantity).toFixed(2)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button
//                         onClick={() => handleRemoveItem(item.item._id)}
//                         className="text-red-500 hover:text-red-700 focus:outline-none"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="px-6 py-4 bg-gray-50">
//             <div className="flex justify-between items-center">
//               <button onClick={handleClearCart} className="text-red-500 hover:text-red-700 focus:outline-none">
//                 Clear Cart
//               </button>
//               <div className="text-right">
//                 <div className="text-lg font-semibold text-gray-900">Total: ${getCartTotal().toFixed(2)}</div>
//                 <button
//                   onClick={handleCheckout}
//                   disabled={checkoutLoading}
//                   className="mt-2 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
//                 >
//                   {checkoutLoading ? "Processing..." : "Checkout"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// frontend/src/pages/Cart.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaShoppingBag, FaShoppingCart, FaCreditCard, FaTruck } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, loading, updateCartItem, removeFromCart, clearCart, getCartTotal } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [shippingCost, setShippingCost] = useState(5.99);
  const navigate = useNavigate();

  // Calculate shipping cost based on selected method
  useEffect(() => {
    switch (shippingMethod) {
      case "express":
        setShippingCost(12.99);
        break;
      case "nextDay":
        setShippingCost(19.99);
        break;
      default:
        setShippingCost(5.99);
    }
  }, [shippingMethod]);

  const handleQuantityChange = (itemId, quantity) => {
    updateCartItem(itemId, quantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart();
      toast.info("Your cart has been cleared");
    }
  };

  const handleApplyCoupon = () => {
    // Simulate coupon validation
    if (couponCode.toLowerCase() === "discount20") {
      setDiscount(getCartTotal() * 0.2);
      toast.success("Coupon applied: 20% discount");
    } else if (couponCode.toLowerCase() === "save10") {
      setDiscount(getCartTotal() * 0.1);
      toast.success("Coupon applied: 10% discount");
    } else {
      toast.error("Invalid coupon code");
      setDiscount(0);
    }
  };

  const handleCheckout = () => {
    setCheckoutLoading(true);

    // Simulate checkout process
    setTimeout(() => {
      toast.success("Order placed successfully!");
      setCheckoutLoading(false);
      clearCart();
      navigate("/checkout-success");
    }, 2000);
  };

  if (loading) return <LoadingSpinner />;

  const subtotal = getCartTotal();
  const total = subtotal + shippingCost - discount;

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="mr-2" /> Continue Shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <FaShoppingBag className="mx-auto text-gray-300 mb-4" size={64} />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4 bg-blue-600 text-white">
                <h2 className="text-lg font-semibold flex items-center">
                  <FaShoppingCart className="mr-2" /> Cart Items ({cart.length})
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cart.map((item) => (
                      <tr key={item.item._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              {item.item.imageUrl ? (
                                <img
                                  src={item.item.imageUrl || "/placeholder.svg"}
                                  alt={item.item.title}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-500 text-xs">No image</span>
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <Link
                                to={`/products/${item.item._id}`}
                                className="text-blue-600 font-medium hover:text-blue-800"
                              >
                                {item.item.title}
                              </Link>
                              <p className="text-sm text-gray-500">{item.item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                          ${item.item.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleQuantityChange(item.item._id, item.quantity - 1)}
                              className="text-gray-500 focus:outline-none focus:text-blue-600 p-1 border border-gray-300 rounded-l-md"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.item._id, Number.parseInt(e.target.value))}
                              className="mx-1 border text-center w-12 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.item._id, item.quantity + 1)}
                              className="text-gray-500 focus:outline-none focus:text-blue-600 p-1 border border-gray-300 rounded-r-md"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                          ${(item.item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleRemoveItem(item.item._id)}
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                            title="Remove item"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                <button 
                  onClick={handleClearCart} 
                  className="text-red-500 hover:text-red-700 focus:outline-none flex items-center"
                >
                  <FaTrash className="mr-1" /> Clear Cart
                </button>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Subtotal: ${subtotal.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <div className="p-4 bg-blue-600 text-white">
                <h2 className="text-lg font-semibold">Order Summary</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  {/* Coupon Code */}
                  <div className="pt-4 border-t border-gray-200">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                      Apply Coupon
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                      >
                        Apply
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Try "DISCOUNT20" for 20% off</p>
                  </div>

                  {/* Shipping Method */}
                  <div className="pt-4 border-t border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shipping Method
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="standard"
                          name="shipping"
                          value="standard"
                          checked={shippingMethod === "standard"}
                          onChange={() => setShippingMethod("standard")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="standard" className="ml-2 flex justify-between w-full">
                          <span className="text-sm text-gray-700">Standard Shipping (3-5 days)</span>
                          <span className="text-sm font-medium text-gray-900">$5.99</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="express"
                          name="shipping"
                          value="express"
                          checked={shippingMethod === "express"}
                          onChange={() => setShippingMethod("express")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="express" className="ml-2 flex justify-between w-full">
                          <span className="text-sm text-gray-700">Express Shipping (2-3 days)</span>
                          <span className="text-sm font-medium text-gray-900">$12.99</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="nextDay"
                          name="shipping"
                          value="nextDay"
                          checked={shippingMethod === "nextDay"}
                          onChange={() => setShippingMethod("nextDay")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="nextDay" className="ml-2 flex justify-between w-full">
                          <span className="text-sm text-gray-700">Next Day Delivery</span>
                          <span className="text-sm font-medium text-gray-900">$19.99</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-900 font-medium">${shippingCost.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600 font-medium">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={checkoutLoading}
                    className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                  >
                    {checkoutLoading ? (
                      "Processing..."
                    ) : (
                      <>
                        <FaCreditCard className="mr-2" /> Proceed to Checkout
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommended Products */}
      {cart.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* This would be populated with actual recommended products */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;