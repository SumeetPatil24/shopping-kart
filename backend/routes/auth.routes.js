// backend/routes/auth.routes.js (update)
import express from 'express';
import { register, login, googleLogin, googleCallback, googleUrl, logout, getCurrentUser } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { switchRole } from '../controllers/auth.controller.js';
import { demoGoogleLogin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);
router.get('/google/url', googleUrl);
router.get('/google/callback', googleCallback);
router.get('/logout', logout);
router.get('/me', protect, getCurrentUser);
// backend/routes/auth.routes.js (add this route)
router.post('/switch-role', protect, switchRole);
// backend/routes/auth.routes.js (add this route)
router.post('/demo-google', demoGoogleLogin);

export default router;