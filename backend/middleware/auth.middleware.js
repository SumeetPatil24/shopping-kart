// // backend/middleware/auth.middleware.js
// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js';

// // Protect routes - verify token
// export const protect = async (req, res, next) => {
//   let token;

//   // Check for token in headers or cookies
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     // Get token from header
//     token = req.headers.authorization.split(' ')[1];
//   } else if (req.cookies.token) {
//     // Get token from cookie
//     token = req.cookies.token;
//   }

//   // Check if token exists
//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: 'Not authorized to access this route',
//     });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Get user from token
//     req.user = await User.findById(decoded.id).select('-password');

//     if (!req.user) {
//       return res.status(401).json({
//         success: false,
//         message: 'User not found',
//       });
//     }

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: 'Not authorized to access this route',
//     });
//   }
// };

// // Grant access to specific roles
// export const authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         success: false,
//         message: `User role ${req.user.role} is not authorized to access this route`,
//       });
//     }
//     next();
//   };
// };

// import admin from "../config/firebase-admin.js"
// import User from "../models/user.model.js"

// // Protect routes - verify Firebase token
// export const protect = async (req, res, next) => {
//   let token

//   // Check for token in headers
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     // Get token from header
//     token = req.headers.authorization.split(" ")[1]
//   }

//   // Check if token exists
//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized to access this route",
//     })
//   }

//   try {
//     // Verify token with Firebase
//     const decodedToken = await admin.auth().verifyIdToken(token)

//     // Set user in request
//     req.user = decodedToken

//     next()
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized to access this route",
//     })
//   }
// }

// // Grant access to specific roles
// export const authorize = (...roles) => {
//   return async (req, res, next) => {
//     try {
//       // Get user from database using Firebase UID
//       const user = await User.findOne({ firebaseUid: req.user.uid })

//       if (!user || !roles.includes(user.role)) {
//         return res.status(403).json({
//           success: false,
//           message: `User role ${user ? user.role : "unknown"} is not authorized to access this route`,
//         })
//       }

//       next()
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: "Server error while checking authorization",
//       })
//     }
//   }
// }

// import admin from "../config/firebase-admin.js"
// import User from "../models/user.model.js"

// // Protect routes - verify Firebase token
// export const protect = async (req, res, next) => {
//   let token

//   // Check for token in headers
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     // Get token from header
//     token = req.headers.authorization.split(" ")[1]
//   }

//   // Check if token exists
//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized to access this route",
//     })
//   }

//   try {
//     // Verify token with Firebase
//     const decodedToken = await admin.auth().verifyIdToken(token)

//     // Set user in request
//     req.user = decodedToken

//     // Find user in database
//     const user = await User.findOne({ firebaseUid: decodedToken.uid })

//     // If user exists, add role to request
//     if (user) {
//       req.userRole = user.role
//     }

//     next()
//   } catch (error) {
//     console.error("Auth middleware error:", error)
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized to access this route",
//     })
//   }
// }

// // Grant access to specific roles
// export const authorize = (...roles) => {
//   return async (req, res, next) => {
//     try {
//       // Get user from database using Firebase UID
//       const user = await User.findOne({ firebaseUid: req.user.uid })

//       if (!user || !roles.includes(user.role)) {
//         return res.status(403).json({
//           success: false,
//           message: `User role ${user ? user.role : "unknown"} is not authorized to access this route`,
//         })
//       }

//       next()
//     } catch (error) {
//       console.error("Authorization middleware error:", error)
//       return res.status(500).json({
//         success: false,
//         message: "Server error while checking authorization",
//       })
//     }
//   }
// }

import admin from "../config/firebase-admin.js"
import User from "../models/user.model.js"

// Protect routes - verify Firebase token
export const protect = async (req, res, next) => {
  let token

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    // Get token from header
    token = req.headers.authorization.split(" ")[1]
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized to access this route",
    })
  }

  try {
    // Verify token with Firebase
    const decodedToken = await admin.auth().verifyIdToken(token)

    // Set user in request
    req.user = decodedToken

    // Find user in database to get role
    const user = await User.findOne({ firebaseUid: decodedToken.uid })

    if (user) {
      req.userRole = user.role
    }

    next()
  } catch (error) {
    console.error("Auth middleware error:", error)
    return res.status(401).json({
      success: false,
      message: "Not authorized to access this route",
    })
  }
}

// Grant access to specific roles
export const authorize = (...roles) => {
  return async (req, res, next) => {
    try {
      // Get user from database using Firebase UID
      const user = await User.findOne({ firebaseUid: req.user.uid })

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        })
      }

      if (!roles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message: `User role ${user.role} is not authorized to access this route`,
        })
      }

      // Add user role to request for later use
      req.userRole = user.role
      next()
    } catch (error) {
      console.error("Authorization middleware error:", error)
      return res.status(500).json({
        success: false,
        message: "Server error while checking authorization",
      })
    }
  }
}