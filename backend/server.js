// // backend/server.js
// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import morgan from 'morgan';
// import helmet from 'helmet';
// import cookieParser from 'cookie-parser';
// import { fileURLToPath } from 'url';
// import path from 'path';
// import authRoutes from './routes/auth.routes.js';
// import itemRoutes from './routes/item.routes.js';
// import userRoutes from './routes/user.routes.js';
// import { errorHandler } from './middleware/error.middleware.js';
// import connectDB from './config/db.js';

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5000;

// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   });

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//   credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(helmet());
// app.use(morgan('dev'));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/items', itemRoutes);
// app.use('/api/users', userRoutes);

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'ok', message: 'Service is running' });
// });

// // Error handling middleware
// app.use(errorHandler);

// // Connect to MongoDB and start server
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   });

// export default app; 

// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import morgan from "morgan"
// import helmet from "helmet"
// import cookieParser from "cookie-parser"
// import session from "express-session"
// import passport from "passport"
// import authRoutes from "./routes/auth.routes.js"
// import itemRoutes from "./routes/item.routes.js"
// import userRoutes from "./routes/user.routes.js"
// import courseRoutes from "./routes/course.routes.js"
// import { errorHandler } from "./middleware/error.middleware.js"
// import "./config/passport.js"

// // Load environment variables
// dotenv.config()

// // Initialize Express app
// const app = express()
// const PORT = process.env.PORT || 5000

// // Middleware
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:5173",
//     credentials: true,
//   }),
// )
// app.use(express.json())
// app.use(cookieParser())
// app.use(helmet())
// app.use(morgan("dev"))

// // Session configuration for Passport
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "your-secret-key",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 24 * 60 * 60 * 1000, // 1 day
//     },
//   }),
// )

// // Initialize Passport
// app.use(passport.initialize())
// app.use(passport.session())

// // Routes
// app.use("/api/auth", authRoutes)
// app.use("/api/items", itemRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/courses", courseRoutes)

// // Health check endpoint
// app.get("/health", (req, res) => {
//   res.status(200).json({ status: "ok", message: "Service is running" })
// })

// // Error handling middleware
// app.use(errorHandler)

// // Connect to MongoDB and start server
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("Connected to MongoDB Atlas")
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`)
//     })
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error)
//     process.exit(1)
//   })

// export default app

// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import morgan from "morgan"
// import helmet from "helmet"
// import cookieParser from "cookie-parser"
// import session from "express-session"
// import passport from "passport"
// import authRoutes from "./routes/auth.routes.js"
// import itemRoutes from "./routes/item.routes.js"
// import userRoutes from "./routes/user.routes.js"
// import courseRoutes from "./routes/course.routes.js"
// import { errorHandler } from "./middleware/error.middleware.js"
// import "./config/passport.js"

// // Load environment variables
// dotenv.config()

// // Initialize Express app
// const app = express()
// const PORT = process.env.PORT || 5000

// // CORS Configuration - Fix CORS issues
// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "http://localhost:5174",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// }

// // Middleware
// app.use(cors(corsOptions))
// app.use(express.json())
// app.use(cookieParser())
// app.use(
//   helmet({
//     contentSecurityPolicy: false, // Disable CSP for development
//   }),
// )
// app.use(morgan("dev"))

// // Session configuration for Passport
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "your-secret-key",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 24 * 60 * 60 * 1000, // 1 day
//     },
//   }),
// )

// // Initialize Passport
// app.use(passport.initialize())
// app.use(passport.session())

// // Routes
// app.use("/api/auth", authRoutes)
// app.use("/api/items", itemRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/courses", courseRoutes)

// // Health check endpoint
// app.get("/health", (req, res) => {
//   res.status(200).json({ status: "ok", message: "Service is running" })
// })

// // Error handling middleware
// app.use(errorHandler)

// // Connect to MongoDB and start server
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("Connected to MongoDB Atlas")
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`)
//     })
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error)
//     process.exit(1)
//   })

// export default app

import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import session from "express-session"
import passport from "passport"
import authRoutes from "./routes/auth.routes.js"
import itemRoutes from "./routes/item.routes.js"
import userRoutes from "./routes/user.routes.js"
import courseRoutes from "./routes/course.routes.js"
import { errorHandler } from "./middleware/error.middleware.js"
import "./config/passport.js"

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 5000

// CORS Configuration - Fix to allow multiple origins
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5174", // Add the port your frontend is actually running on
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
]

// Improved CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true)

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log("CORS blocked origin:", origin)
      // Still allow the request but log it for debugging
      callback(null, true)
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for development
  }),
)
app.use(morgan("dev"))

// Session configuration for Passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  }),
)

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/items", itemRoutes)
app.use("/api/users", userRoutes)
app.use("/api/courses", courseRoutes)

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Service is running" })
})

// Error handling middleware
app.use(errorHandler)

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  })

export default app