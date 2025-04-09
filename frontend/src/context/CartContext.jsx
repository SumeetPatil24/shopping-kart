// // frontend/src/context/CartContext.jsx
// import { createContext, useContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { useAuth } from './AuthContext';
// import api from '../services/api';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { user } = useAuth();

//   // Fetch cart when user changes
//   useEffect(() => {
//     if (user) {
//       fetchCart();
//     } else {
//       setCart([]);
//     }
//   }, [user]);

//   // Fetch cart from API
//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       const response = await api.get('/api/users/cart');
//       setCart(response.data.data);
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       toast.error('Failed to load cart');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId, quantity = 1) => {
//     if (!user) {
//       toast.error('Please login to add items to cart');
//       return false;
//     }

//     try {
//       setLoading(true);
//       const response = await api.post('/api/users/cart', { itemId, quantity });
//       setCart(response.data.data);
//       toast.success('Item added to cart');
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Failed to add item to cart';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update cart item quantity
//   const updateCartItem = async (itemId, quantity) => {
//     try {
//       setLoading(true);
//       const response = await api.put('/api/users/cart', { itemId, quantity });
//       setCart(response.data.data);
//       toast.success('Cart updated');
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Failed to update cart';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     try {
//       setLoading(true);
//       const response = await api.delete(`/api/users/cart/${itemId}`);
//       setCart(response.data.data);
//       toast.success('Item removed from cart');
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Failed to remove item from cart';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Clear cart
//   const clearCart = async () => {
//     try {
//       setLoading(true);
//       await api.delete('/api/users/cart');
//       setCart([]);
//       toast.success('Cart cleared');
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Failed to clear cart';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate cart total
//   const getCartTotal = () => {
//     return cart.reduce((total, item) => {
//       return total + (item.item.price * item.quantity);
//     }, 0);
//   };

//   // Get cart item count
//   const getCartItemCount = () => {
//     return cart.reduce((count, item) => count + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         loading,
//         addToCart,
//         updateCartItem,
//         removeFromCart,
//         clearCart,
//         getCartTotal,
//         getCartItemCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../services/api"
import { useAuth } from "./AuthContext"

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  // Fetch cart items when user changes
  useEffect(() => {
    if (user) {
      fetchCart()
    } else {
      setCartItems([])
    }
  }, [user])

  // Fetch cart items from API
  const fetchCart = async () => {
    try {
      setLoading(true)
      const response = await api.get("/api/users/cart")
      setCartItems(response.data.data)
    } catch (error) {
      console.error("Error fetching cart:", error)
      // Don't show error toast as this might happen when user is not logged in
    } finally {
      setLoading(false)
    }
  }

  // Add item to cart
  const addToCart = async (itemId, quantity = 1) => {
    if (!user) {
      toast.info("Please login to add items to cart")
      return false
    }

    try {
      setLoading(true)
      const response = await api.post("/api/users/cart", { itemId, quantity })
      setCartItems(response.data.data)
      return true
    } catch (error) {
      console.error("Error adding to cart:", error)
      toast.error(error.response?.data?.message || "Failed to add item to cart")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Update cart item quantity
  const updateCartItem = async (itemId, quantity) => {
    try {
      setLoading(true)
      const response = await api.put("/api/users/cart", { itemId, quantity })
      setCartItems(response.data.data)
      return true
    } catch (error) {
      console.error("Error updating cart:", error)
      toast.error(error.response?.data?.message || "Failed to update cart")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    try {
      setLoading(true)
      const response = await api.delete(`/api/users/cart/${itemId}`)
      setCartItems(response.data.data)
      toast.success("Item removed from cart")
      return true
    } catch (error) {
      console.error("Error removing from cart:", error)
      toast.error(error.response?.data?.message || "Failed to remove item from cart")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Clear cart
  const clearCart = async () => {
    try {
      setLoading(true)
      await api.delete("/api/users/cart")
      setCartItems([])
      toast.success("Cart cleared")
      return true
    } catch (error) {
      console.error("Error clearing cart:", error)
      toast.error(error.response?.data?.message || "Failed to clear cart")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Get cart item count
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.item.price, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getCartItemCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}