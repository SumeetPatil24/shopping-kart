// import admin from "firebase-admin"
// import dotenv from "dotenv"

// dotenv.config()

// // Initialize Firebase Admin with service account
// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// })

// export default admin

import admin from "firebase-admin"
import dotenv from "dotenv"

dotenv.config()

// Initialize Firebase Admin with service account
let firebaseAdmin

try {
  // Check if Firebase Admin is already initialized
  if (!admin.apps.length) {
    // Parse the service account JSON from environment variable
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "{}")

    // Initialize Firebase Admin
    firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    console.log("Firebase Admin initialized successfully")
  } else {
    firebaseAdmin = admin
    console.log("Firebase Admin already initialized")
  }
} catch (error) {
  console.error("Error initializing Firebase Admin:", error)

  // Create a mock Firebase Admin for development if needed
  if (process.env.NODE_ENV === "development") {
    console.log("Using mock Firebase Admin for development")

    // Mock verifyIdToken function
    firebaseAdmin = {
      auth: () => ({
        verifyIdToken: async (token) => {
          // For development only - simulate a valid token
          return { uid: "mock-uid" }
        },
      }),
    }
  } else {
    throw error
  }
}

export default firebaseAdmin