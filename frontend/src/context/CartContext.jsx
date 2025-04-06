// frontend/src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';
import api from '../services/api';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Fetch cart when user changes
  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [user]);

  // Fetch cart from API
  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/users/cart');
      setCart(response.data.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
      toast.error('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = async (itemId, quantity = 1) => {
    if (!user) {
      toast.error('Please login to add items to cart');
      return false;
    }

    try {
      setLoading(true);
      const response = await api.post('/api/users/cart', { itemId, quantity });
      setCart(response.data.data);
      toast.success('Item added to cart');
      return true;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to add item to cart';
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update cart item quantity
  const updateCartItem = async (itemId, quantity) => {
    try {
      setLoading(true);
      const response = await api.put('/api/users/cart', { itemId, quantity });
      setCart(response.data.data);
      toast.success('Cart updated');
      return true;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update cart';
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    try {
      setLoading(true);
      const response = await api.delete(`/api/users/cart/${itemId}`);
      setCart(response.data.data);
      toast.success('Item removed from cart');
      return true;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to remove item from cart';
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      setLoading(true);
      await api.delete('/api/users/cart');
      setCart([]);
      toast.success('Cart cleared');
      return true;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to clear cart';
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.item.price * item.quantity);
    }, 0);
  };

  // Get cart item count
  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};