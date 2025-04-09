// // backend/controllers/user.controller.js
// import User from '../models/user.model.js';
// import Item from '../models/item.model.js';

// // Get user cart
// export const getCart = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id).populate({
//       path: 'cart.item',
//       select: 'title price imageUrl available',
//     });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found',
//       });
//     }

//     // Filter out unavailable items
//     const validCartItems = user.cart.filter(cartItem => 
//       cartItem.item && cartItem.item.available
//     );

//     res.status(200).json({
//       success: true,
//       data: validCartItems,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Add item to cart
// export const addToCart = async (req, res, next) => {
//   try {
//     const { itemId, quantity = 1 } = req.body;

//     // Validate item exists and is available
//     const item = await Item.findById(itemId);
//     if (!item) {
//       return res.status(404).json({
//         success: false,
//         message: 'Item not found',
//       });
//     }

//     if (!item.available) {
//       return res.status(400).json({
//         success: false,
//         message: 'Item is not available',
//       });
//     }

//     // Find user and update cart
//     const user = await User.findById(req.user.id);
    
//     // Check if item already in cart
//     const cartItemIndex = user.cart.findIndex(
//       cartItem => cartItem.item.toString() === itemId
//     );

//     if (cartItemIndex > -1) {
//       // Update quantity if item already in cart
//       user.cart[cartItemIndex].quantity += parseInt(quantity);
//     } else {
//       // Add new item to cart
//       user.cart.push({
//         item: itemId,
//         quantity: parseInt(quantity),
//       });
//     }

//     await user.save();

//     // Return updated cart with populated items
//     const updatedUser = await User.findById(req.user.id).populate({
//       path: 'cart.item',
//       select: 'title price imageUrl available',
//     });

//     res.status(200).json({
//       success: true,
//       data: updatedUser.cart,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Update cart item quantity
// export const updateCartItem = async (req, res, next) => {
//   try {
//     const { itemId, quantity } = req.body;

//     if (!itemId || quantity === undefined) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please provide itemId and quantity',
//       });
//     }

//     const user = await User.findById(req.user.id);
    
//     // Find item in cart
//     const cartItemIndex = user.cart.findIndex(
//       cartItem => cartItem.item.toString() === itemId
//     );

//     if (cartItemIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: 'Item not found in cart',
//       });
//     }

//     // Update quantity or remove if quantity is 0
//     if (parseInt(quantity) <= 0) {
//       user.cart.splice(cartItemIndex, 1);
//     } else {
//       user.cart[cartItemIndex].quantity = parseInt(quantity);
//     }

//     await user.save();

//     // Return updated cart with populated items
//     const updatedUser = await User.findById(req.user.id).populate({
//       path: 'cart.item',
//       select: 'title price imageUrl available',
//     });

//     res.status(200).json({
//       success: true,
//       data: updatedUser.cart,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Remove item from cart
// export const removeFromCart = async (req, res, next) => {
//   try {
//     const { itemId } = req.params;

//     const user = await User.findById(req.user.id);
    
//     // Filter out the item to remove
//     user.cart = user.cart.filter(
//       cartItem => cartItem.item.toString() !== itemId
//     );

//     await user.save();

//     // Return updated cart with populated items
//     const updatedUser = await User.findById(req.user.id).populate({
//       path: 'cart.item',
//       select: 'title price imageUrl available',
//     });

//     res.status(200).json({
//       success: true,
//       data: updatedUser.cart,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Clear cart
// export const clearCart = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id);
    
//     user.cart = [];
//     await user.save();

//     res.status(200).json({
//       success: true,
//       data: [],
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // backend/controllers/user.controller.js (add this function)
// // Update user profile
// export const updateProfile = async (req, res, next) => {
//   try {
//     const { username, email, currentPassword, newPassword } = req.body;
    
//     // Get user
//     const user = await User.findById(req.user.id);
    
//     // Update basic info
//     user.username = username || user.username;
//     user.email = email || user.email;
    
//     // Update password if provided
//     if (newPassword) {
//       // Verify current password
//       const isMatch = await user.comparePassword(currentPassword);
//       if (!isMatch) {
//         return res.status(400).json({
//           success: false,
//           message: 'Current password is incorrect',
//         });
//       }
      
//       user.password = newPassword;
//     }
    
//     await user.save();
    
//     res.status(200).json({
//       success: true,
//       message: 'Profile updated successfully',
//       data: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//         profilePicture: user.profilePicture,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

import User from "../models/user.model.js"
import Item from "../models/item.model.js"

// Get user cart
export const getCart = async (req, res, next) => {
  try {
    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid }).populate({
      path: "cart.item",
      select: "title price imageUrl available",
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Filter out unavailable items
    const validCartItems = user.cart.filter((cartItem) => cartItem.item && cartItem.item.available)

    res.status(200).json({
      success: true,
      data: validCartItems,
    })
  } catch (error) {
    next(error)
  }
}

// Add item to cart
export const addToCart = async (req, res, next) => {
  try {
    const { itemId, quantity = 1 } = req.body

    // Validate item exists and is available
    const item = await Item.findById(itemId)
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      })
    }

    if (!item.available) {
      return res.status(400).json({
        success: false,
        message: "Item is not available",
      })
    }

    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Check if item already in cart
    const cartItemIndex = user.cart.findIndex((cartItem) => cartItem.item.toString() === itemId)

    if (cartItemIndex > -1) {
      // Update quantity if item already in cart
      user.cart[cartItemIndex].quantity += Number.parseInt(quantity)
    } else {
      // Add new item to cart
      user.cart.push({
        item: itemId,
        quantity: Number.parseInt(quantity),
      })
    }

    await user.save()

    // Return updated cart with populated items
    const updatedUser = await User.findOne({ firebaseUid: req.user.uid }).populate({
      path: "cart.item",
      select: "title price imageUrl available",
    })

    res.status(200).json({
      success: true,
      data: updatedUser.cart,
    })
  } catch (error) {
    next(error)
  }
}

// Update cart item quantity
export const updateCartItem = async (req, res, next) => {
  try {
    const { itemId, quantity } = req.body

    if (!itemId || quantity === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide itemId and quantity",
      })
    }

    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Find item in cart
    const cartItemIndex = user.cart.findIndex((cartItem) => cartItem.item.toString() === itemId)

    if (cartItemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      })
    }

    // Update quantity or remove if quantity is 0
    if (Number.parseInt(quantity) <= 0) {
      user.cart.splice(cartItemIndex, 1)
    } else {
      user.cart[cartItemIndex].quantity = Number.parseInt(quantity)
    }

    await user.save()

    // Return updated cart with populated items
    const updatedUser = await User.findOne({ firebaseUid: req.user.uid }).populate({
      path: "cart.item",
      select: "title price imageUrl available",
    })

    res.status(200).json({
      success: true,
      data: updatedUser.cart,
    })
  } catch (error) {
    next(error)
  }
}

// Remove item from cart
export const removeFromCart = async (req, res, next) => {
  try {
    const { itemId } = req.params

    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Filter out the item to remove
    user.cart = user.cart.filter((cartItem) => cartItem.item.toString() !== itemId)

    await user.save()

    // Return updated cart with populated items
    const updatedUser = await User.findOne({ firebaseUid: req.user.uid }).populate({
      path: "cart.item",
      select: "title price imageUrl available",
    })

    res.status(200).json({
      success: true,
      data: updatedUser.cart,
    })
  } catch (error) {
    next(error)
  }
}

// Clear cart
export const clearCart = async (req, res, next) => {
  try {
    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    user.cart = []
    await user.save()

    res.status(200).json({
      success: true,
      data: [],
    })
  } catch (error) {
    next(error)
  }
}