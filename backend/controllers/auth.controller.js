// backend/controllers/auth.controller.js
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL
);


// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// backend/controllers/auth.controller.js (add this function)
// Demo Google login (for demonstration purposes only)
export const demoGoogleLogin = async (req, res, next) => {
  try {
    const { email, name, picture } = req.body;
    
    // Check if user exists
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new user
      user = await User.create({
        email,
        username: name.replace(/\s+/g, "") + Math.floor(Math.random() * 1000),
        googleId: "demo-google-id",
        profilePicture: picture,
      });
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    next(error);
  }
};

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

// Generate Google OAuth URL
// export const googleUrl = (req, res) => {
//   const url = googleClient.generateAuthUrl({
//     access_type: 'offline',
//     scope: ['profile', 'email'],
//     prompt: 'consent'
//   });
  
//   res.redirect(url);
// };
/* export const googleUrl = async (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['profile', 'email'],
  });

  res.json({ url });
}; */
export const googleUrl = (req, res) => {
  const redirectUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
    new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: process.env.GOOGLE_CALLBACK_URL,
      response_type: 'code',
      scope: ['profile', 'email'],
      access_type: 'offline',
      prompt: 'consent',
    }).toString();

  res.json({ url: redirectUrl });
};

// Handle Google OAuth callback
export const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;
    
    const { tokens } = await googleClient.getToken(code);
    googleClient.setCredentials(tokens);
    
    const oauth2 = google.oauth2({
      auth: googleClient,
      version: 'v2'
    });
    
    const { data } = await oauth2.userinfo.get();
    
    // Check if user exists
    let user = await User.findOne({ email: data.email });
    
    if (!user) {
      // Create new user
      user = await User.create({
        email: data.email,
        username: data.name.replace(/\s+/g, '') + Math.floor(Math.random() * 1000),
        googleId: data.id,
        profilePicture: data.picture
      });
    } else {
      // Update Google ID if user exists but doesn't have Google ID
      if (!user.googleId) {
        user.googleId = data.id;
        user.profilePicture = data.picture || user.profilePicture;
        await user.save();
      }
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  } catch (error) {
    console.error('Google callback error:', error);
    res.redirect(`${process.env.FRONTEND_URL}/login?error=google_auth_failed`);
  }
};

// Set cookie with JWT token
const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken(user._id);

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    });
};

// Register a new user
export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists',
      });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
    });

    sendTokenResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};

// backend/controllers/auth.controller.js (add this function)
// Switch user role (for demo purposes only)
export const switchRole = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    
    // Toggle between admin and user roles
    user.role = user.role === 'admin' ? 'user' : 'admin';
    await user.save();
    
    res.status(200).json({
      success: true,
      message: `Role switched to ${user.role}`,
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Login user
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// Google OAuth login
export const googleLogin = async (req, res, next) => {
  try {
    const { idToken } = req.body;

    // Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture, sub: googleId } = ticket.getPayload();

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user if doesn't exist
      user = await User.create({
        email,
        username: name.replace(/\s+/g, '') + Math.floor(Math.random() * 1000),
        googleId,
        profilePicture: picture,
      });
    } else {
      // Update Google ID if user exists but doesn't have Google ID
      if (!user.googleId) {
        user.googleId = googleId;
        user.profilePicture = picture || user.profilePicture;
        await user.save();
      }
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// Logout user
export const logout = (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000), // 10 seconds
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'User logged out successfully',
  });
};

// Get current user
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};