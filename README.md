# ShopCart - Full Stack E-Commerce Application

![ShopCart Banner](https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Without Docker](#without-docker)
  - [With Docker](#with-docker)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [User Roles](#user-roles)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Overview

ShopCart is a comprehensive full-stack e-commerce application with a microservice architecture. It features a React/Vite frontend and Node.js backend, offering a complete shopping experience with user authentication, product management, shopping cart functionality, and an admin dashboard.

The application also includes an online courses marketplace, allowing users to browse and enroll in courses alongside traditional product shopping.

## ✨ Features

### User Features
- User authentication with JWT and Google OAuth
- Product browsing with search, filter, and sort capabilities
- Shopping cart functionality
- Course enrollment system
- Responsive UI design for all devices
- User profile management

### Admin Features
- Admin dashboard for monitoring
- Product management (CRUD operations)
- Course management (CRUD operations)
- User management
- Order tracking

### Technical Features
- Microservice architecture
- RESTful API design
- MongoDB Atlas integration
- Firebase authentication
- Secure authentication and authorization
- Error handling and logging
- Docker containerization
- 12-factor app methodology

## 💻 Technology Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- React Icons
- Axios for API requests
- Firebase for authentication

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Passport.js for OAuth
- Firebase Admin SDK
- Helmet for security
- CORS for cross-origin requests

### DevOps
- Docker & Docker Compose
- Environment variables management
- MongoDB Atlas for database hosting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.18.0 or higher)
- npm or yarn
- MongoDB (local or Atlas connection)
- Docker and Docker Compose (optional, for containerization)
- Git

## 🔧 Installation

### Environment Variables

#### Backend (.env)
Create a `.env` file in the `backend` directory with the following variables:

```
# Server Configuration
PORT=5000
NODE_ENV=development
BACKEND_URL=http://localhost:5000

# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here
SESSION_SECRET=your_session_secret_key_here

# Admin Registration
ADMIN_REGISTRATION_CODE=your_admin_registration_code_here
ADMIN_SECRET=your_admin_secret_here

# Firebase Admin SDK
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"your-project-id","private_key_id":"your-private-key-id","private_key":"your-private-key","client_email":"your-client-email","client_id":"your-client-id","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"your-client-cert-url"}

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

#### Frontend (.env)
Create a `.env` file in the `frontend` directory with the following variables:

```
`VITE_API_URL=http://localhost:5000`

# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### Without Docker

#### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Seed the database with initial data
npm run seed

# Start the server
npm run dev
```

#### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### With Docker

The application can be run using Docker and Docker Compose for easier setup and deployment.

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

#### Individual Container Commands
```
# Build and run backend container
docker build -t shopcart-backend ./backend
docker run -p 5000:5000 --env-file ./backend/.env shopcart-backend

# Build and run frontend container
docker build -t shopcart-frontend ./frontend
docker run -p 5173:5173 --env-file ./frontend/.env shopcart-frontend
```

## 📁 Project Structure

```
shopcart/
├── backend/                  # Backend Node.js application
│   ├── config/               # Configuration files
│   ├── controllers/          # Request handlers
│   ├── middleware/           # Express middleware
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions
│   ├── .env                  # Environment variables
│   ├── .env.example          # Example environment variables
│   ├── Dockerfile            # Docker configuration
│   ├── package.json          # Dependencies and scripts
│   └── server.js             # Entry point
│
├── frontend/                 # Frontend React application
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   ├── context/          # React context providers
│   │   ├── firebase/         # Firebase configuration
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page components
│   │   ├── services/         # API services
│   │   ├── App.jsx           # Main App component
│   │   ├── index.css         # Global styles
│   │   └── main.jsx          # Entry point
│   ├── .env                  # Environment variables
│   ├── .env.example          # Example environment variables
│   ├── Dockerfile            # Docker configuration
│   ├── package.json          # Dependencies and scripts
│   └── vite.config.js        # Vite configuration
│
├── docker-compose.yml        # Docker Compose configuration
└── README.md                 # Project documentation
```

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint                  | Description                       | Auth Required |
|--------|---------------------------|-----------------------------------|---------------|
| POST   | /api/auth/register        | Register a new user               | No            |
| POST   | /api/auth/register-admin  | Register a new admin              | No            |
| POST   | /api/auth/firebase-auth   | Authenticate with Firebase        | No            |
| GET    | /api/auth/logout          | Logout user                       | No            |
| GET    | /api/auth/me              | Get current user                  | Yes           |
| POST   | /api/auth/verify-admin    | Verify admin status               | Yes           |

### Product Endpoints

| Method | Endpoint                  | Description                       | Auth Required |
|--------|---------------------------|-----------------------------------|---------------|
| GET    | /api/items                | Get all products                  | No            |
| GET    | /api/items/:id            | Get a single product              | No            |
| POST   | /api/items                | Create a new product              | Yes (Admin)   |
| PUT    | /api/items/:id            | Update a product                  | Yes (Admin)   |
| DELETE | /api/items/:id            | Delete a product                  | Yes (Admin)   |

### Cart Endpoints

| Method | Endpoint                  | Description                       | Auth Required |
|--------|---------------------------|-----------------------------------|---------------|
| GET    | /api/users/cart           | Get user's cart                   | Yes           |
| POST   | /api/users/cart           | Add item to cart                  | Yes           |
| PUT    | /api/users/cart           | Update cart item                  | Yes           |
| DELETE | /api/users/cart/:itemId   | Remove item from cart             | Yes           |
| DELETE | /api/users/cart           | Clear cart                        | Yes           |

### Course Endpoints

| Method | Endpoint                      | Description                       | Auth Required |
|--------|-------------------------------|-----------------------------------|---------------|
| GET    | /api/courses                  | Get all courses                   | No            |
| GET    | /api/courses/featured         | Get featured courses              | No            |
| GET    | /api/courses/:id              | Get a single course               | No            |
| POST   | /api/courses                  | Create a new course               | Yes (Admin)   |
| PUT    | /api/courses/:id              | Update a course                   | Yes (Admin)   |
| DELETE | /api/courses/:id              | Delete a course                   | Yes (Admin)   |
| POST   | /api/courses/:courseId/enroll | Enroll in a course                | Yes           |
| GET    | /api/courses/user/enrolled    | Get user's enrolled courses       | Yes           |

## 👥 User Roles

### Regular User
- Browse products and courses
- Add items to cart
- Manage their profile
- Enroll in courses
- View order history

### Admin User
- All regular user capabilities
- Access admin dashboard
- Manage products (add, edit, delete)
- Manage courses (add, edit, delete)
- View all users and orders

## ❓ Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure:
1. Your backend CORS configuration includes the correct frontend URL
2. The frontend is making requests to the correct backend URL
3. The backend server is running

Solution:
```javascript
// In backend/server.js
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5174",
  // Add any other origins as needed
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log("CORS blocked origin:", origin)
      callback(null, true) // Still allow during development
    }
  },
  credentials: true,
  // Other options...
}

app.use(cors(corsOptions))
```

### Authentication Issues
If you experience authentication problems:
1. Check that your Firebase configuration is correct
2. Ensure the FIREBASE_SERVICE_ACCOUNT environment variable is properly formatted
3. Verify that your JWT_SECRET is set correctly

### Database Connection Issues
If you can't connect to MongoDB:
1. Verify your MONGODB_URI is correct
2. Ensure your IP address is whitelisted in MongoDB Atlas
3. Check network connectivity to the MongoDB server

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ by Sumeet Patil, YVDN Sathwik, Mohd. Arham, Shrinath