// backend/models/item.model.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    details: {
      type: String,
      required: [true, 'Details are required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    available: {
      type: Boolean,
      default: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative'],
    },
    attributes: {
      type: Map,
      of: String,
      default: {},
    },
  },
  { timestamps: true }
);

// Add text index for search functionality
itemSchema.index({ title: 'text', details: 'text', category: 'text' });

const Item = mongoose.model('Item', itemSchema);

export default Item;