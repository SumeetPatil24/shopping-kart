// // // backend/routes/auth.routes.js (update)
// // import express from 'express';
// // import { register, login, googleLogin, googleCallback, googleUrl, logout, getCurrentUser } from '../controllers/auth.controller.js';
// // import { protect } from '../middleware/auth.middleware.js';
// // import { switchRole } from '../controllers/auth.controller.js';
// // import { demoGoogleLogin } from '../controllers/auth.controller.js';

// // const router = express.Router();

// // router.post('/register', register);
// // router.post('/login', login);
// // router.post('/google', googleLogin);
// // router.get('/google/url', googleUrl);
// // router.get('/google/callback', googleCallback);
// // router.get('/logout', logout);
// // router.get('/me', protect, getCurrentUser);
// // // backend/routes/auth.routes.js (add this route)
// // router.post('/switch-role', protect, switchRole);
// // // backend/routes/auth.routes.js (add this route)
// // router.post('/demo-google', demoGoogleLogin);

// // export default router; 

// import express from "express"
// import passport from "passport"
// import { register, login, adminLogin, logout, getCurrentUser, switchRole } from "../controllers/auth.controller.js"
// import { protect } from "../middleware/auth.middleware.js"

// const router = express.Router()

// // Regular auth routes
// router.post("/register", register)
// router.post("/login", login)
// router.post("/admin/login", adminLogin)
// router.post("/switch-role", protect, switchRole)
// router.get("/logout", logout)
// router.get("/me", protect, getCurrentUser)

// // Google OAuth routes
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }))

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: `${process.env.FRONTEND_URL || "http://localhost:5173"}/login?error=google-auth-failed`,
//     session: false,
//   }),
//   (req, res) => {
//     // Generate JWT token
//     const token = req.user.generateAuthToken()

//     // Redirect to frontend with token
//     res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/auth/callback?token=${token}`)
//   },
// )

// export default router

// import express from "express"
// import {
//   register,
//   registerAdmin,
//   firebaseAuth,
//   verifyAdmin,
//   logout,
//   getCurrentUser,
// } from "../controllers/auth.controller.js"
// import { protect } from "../middleware/auth.middleware.js"

// const router = express.Router()

// // Public routes
// router.post("/register", register)
// router.post("/register-admin", registerAdmin)
// router.post("/firebase-auth", firebaseAuth)
// router.get("/logout", logout)

// // Protected routes
// router.get("/me", protect, getCurrentUser)
// router.post("/verify-admin", protect, verifyAdmin)

// export default router

import express from "express"
import {
  register,
  registerAdmin,
  firebaseAuth,
  verifyAdmin,
  logout,
  getCurrentUser,
  createDemoAdmin,
} from "../controllers/auth.controller.js"
import { protect } from "../middleware/auth.middleware.js"

const router = express.Router()

// Public routes
router.post("/register", register)
router.post("/register-admin", registerAdmin)
router.post("/firebase-auth", firebaseAuth)
router.get("/logout", logout)
router.post("/create-demo-admin", createDemoAdmin)

// Protected routes
router.get("/me", protect, getCurrentUser)
router.post("/verify-admin", protect, verifyAdmin)

export default router