// backend/routes/item.routes.js
import express from 'express';
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/item.controller.js';
import { protect, authorize } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
  .get(getItems)
  .post(protect, authorize('admin'), createItem);

router.route('/:id')
  .get(getItem)
  .put(protect, authorize('admin'), updateItem)
  .delete(protect, authorize('admin'), deleteItem);

export default router;