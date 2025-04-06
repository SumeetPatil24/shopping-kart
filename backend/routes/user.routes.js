// backend/routes/user.routes.js (update)
import express from 'express';
import { getCart, addToCart, updateCartItem, removeFromCart, clearCart, updateProfile } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Cart routes
router.get('/cart', protect, getCart);
router.post('/cart', protect, addToCart);
router.put('/cart', protect, updateCartItem);
router.delete('/cart/:itemId', protect, removeFromCart);
router.delete('/cart', protect, clearCart);

// Profile routes
router.put('/profile', protect, updateProfile);

export default router;