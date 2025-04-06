// frontend/src/pages/admin/EditProduct.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSave, FaTimes } from 'react-icons/fa';
import api from '../../services/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    details: '',
    category: '',
    price: '',
    available: true,
    imageUrl: '',
    stock: 0,
    attributes: {},
  });
  const [errors, setErrors] = useState({});
  const [attributeKey, setAttributeKey] = useState('');
  const [attributeValue, setAttributeValue] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/items/${id}`);
        const product = response.data.data;

        setFormData({
          title: product.title,
          details: product.details,
          category: product.category,
          price: product.price,
          available: product.available,
          imageUrl: product.imageUrl || '',
          stock: product.stock || 0,
          attributes: product.attributes || {},
        });
      } catch (error) {
        console.error('Error fetching product:', error);
        alert('Failed to load product. Redirecting to products page.');
        navigate('/admin/products');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Details are required';
    }

    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(formData.price) || parseFloat(formData.price) < 0) {
      newErrors.price = 'Price must be a positive number';
    }

    if (formData.stock && (isNaN(formData.stock) || parseInt(formData.stock) < 0)) {
      newErrors.stock = 'Stock must be a non-negative number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setSaving(true);

      // Format data for API
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock) || 0,
      };

      await api.put(`/api/items/${id}`, productData);

      navigate('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleAddAttribute = () => {
    if (attributeKey.trim() && attributeValue.trim()) {
      setFormData({
        ...formData,
        attributes: {
          ...formData.attributes,
          [attributeKey]: attributeValue,
        },
      });
      setAttributeKey('');
      setAttributeValue('');
    }
  };

  const handleRemoveAttribute = (key) => {
    const updatedAttributes = { ...formData.attributes };
    delete updatedAttributes[key];

    setFormData({
      ...formData,
      attributes: updatedAttributes,
    });
  };

  const handleCancel = () => {
    navigate('/admin/products');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Product</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
              </div>

              {/* Stock */}
              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    errors.stock ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.stock && <p className="mt-1 text-sm text-red-500">{errors.stock}</p>}
              </div>

              {/* Image URL */}
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Available */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="available"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                  className="h-4 w-4 text-gray-800 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label htmlFor="available" className="ml-2 block text-sm text-gray-700">
                  Available for purchase
                </label>
              </div>

              {/* Details */}
              <div className="col-span-2">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                  Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                    errors.details ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.details && <p className="mt-1 text-sm text-red-500">{errors.details}</p>}
              </div>

              {/* Attributes */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Attributes</label>
                <div className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={attributeKey}
                    onChange={(e) => setAttributeKey(e.target.value)}
                    placeholder="Key"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <input
                    type="text"
                    value={attributeValue}
                    onChange={(e) => setAttributeValue(e.target.value)}
                    placeholder="Value"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddAttribute}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    Add
                  </button>
                </div>

                {Object.keys(formData.attributes).length > 0 && (
                  <div className="mt-2 border border-gray-200 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Added Attributes</h3>
                    <ul className="space-y-2">
                      {Object.entries(formData.attributes).map(([key, value]) => (
                        <li key={key} className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">{key}:</span> {value}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveAttribute(key)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTimes />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <FaTimes className="inline mr-2" />
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              <FaSave className="inline mr-2" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;