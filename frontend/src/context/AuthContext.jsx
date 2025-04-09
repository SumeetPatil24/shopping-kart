// // frontend/src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import api from '../services/api';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is logged in on initial load
//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const token = localStorage.getItem('token');
        
//         if (token) {
//           api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           const response = await api.get('/api/auth/me');
//           setUser(response.data.data);
//         }
//       } catch (error) {
//         console.error('Authentication error:', error);
//         localStorage.removeItem('token');
//         delete api.defaults.headers.common['Authorization'];
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkLoggedIn();
//   }, []);

//   // Register user
//   const register = async (userData) => {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/auth/register', userData);
      
//       const { token, user } = response.data;
      
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
//       setUser(user);
//       toast.success('Registration successful!');
      
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Registration failed';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Login user
//   const login = async (credentials) => {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/auth/login', credentials);
      
//       const { token, user } = response.data;
      
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
//       setUser(user);
//       toast.success('Login successful!');
      
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Login failed';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google login
//   const googleLogin = async (idToken) => {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/auth/google', { idToken });
      
//       const { token, user } = response.data;
      
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
//       setUser(user);
//       toast.success('Login successful!');
      
//       return true;
//     } catch (error) {
//       const message = error.response?.data?.message || 'Google login failed';
//       toast.error(message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Logout user
//   const logout = async () => {
//     try {
//       await api.get('/api/auth/logout');
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       localStorage.removeItem('token');
//       delete api.defaults.headers.common['Authorization'];
//       setUser(null);
//       toast.success('Logged out successfully');
//     }
//   };

//   // Check if user is admin
//   const isAdmin = () => {
//     return user && user.role === 'admin';
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         register,
//         login,
//         googleLogin,
//         logout,
//         isAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// "use client"

// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import api from "../services/api"

// const AuthContext = createContext()

// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   // Check if user is logged in on initial load
//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const token = localStorage.getItem("token")

//         if (token) {
//           api.defaults.headers.common["Authorization"] = `Bearer ${token}`
//           const response = await api.get("/api/auth/me")
//           setUser(response.data.data)
//         }
//       } catch (error) {
//         console.error("Authentication error:", error)
//         localStorage.removeItem("token")
//         delete api.defaults.headers.common["Authorization"]
//       } finally {
//         setLoading(false)
//       }
//     }

//     checkLoggedIn()
//   }, [])

//   // Register user
//   const register = async (userData) => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/register", userData)

//       const { token, user } = response.data

//       localStorage.setItem("token", token)
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//       setUser(user)
//       toast.success("Registration successful! Welcome to ShopCart.")

//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Registration failed"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Login user
//   const login = async (credentials) => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/login", credentials)

//       const { token, user } = response.data

//       localStorage.setItem("token", token)
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//       setUser(user)
//       toast.success(`Welcome back, ${user.username}!`)

//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Login failed"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Simulate Google login (for demo purposes)
//   const simulateGoogleLogin = async () => {
//     try {
//       setLoading(true)
//       // This is a simulated Google login that doesn't require actual OAuth
//       const response = await api.post("/api/auth/simulate-google")

//       const { token, user } = response.data

//       localStorage.setItem("token", token)
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//       setUser(user)
//       toast.success(`Welcome, ${user.username}! Logged in with Google.`)

//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Google login failed"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Logout user
//   const logout = async () => {
//     try {
//       await api.get("/api/auth/logout")
//     } catch (error) {
//       console.error("Logout error:", error)
//     } finally {
//       localStorage.removeItem("token")
//       delete api.defaults.headers.common["Authorization"]
//       setUser(null)
//       toast.success("Logged out successfully. See you soon!")
//     }
//   }

//   // Check if user is admin
//   const isAdmin = () => {
//     return user && user.role === "admin"
//   }

//   // Switch user role (for demo purposes)
//   const switchRole = async () => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/switch-role")
//       setUser(response.data.data)
//       toast.success(`Role switched to ${response.data.data.role}`)
//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Failed to switch role"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         register,
//         login,
//         simulateGoogleLogin,
//         logout,
//         isAdmin,
//         switchRole
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// } 

// "use client"

// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import api from "../services/api"
// import { useNavigate } from "react-router-dom"

// const AuthContext = createContext()
// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate()

//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   // Check if user is logged in on initial load
//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const token = localStorage.getItem("token")

//         if (token) {
//           api.defaults.headers.common["Authorization"] = `Bearer ${token}`
//           const response = await api.get("/api/auth/me")
//           setUser(response.data.data)
//         }
//       } catch (error) {
//         console.error("Authentication error:", error)
//         localStorage.removeItem("token")
//         delete api.defaults.headers.common["Authorization"]
//       } finally {
//         setLoading(false)
//       }
//     }

//     checkLoggedIn()
//   }, [])

//   // Check for token in URL (for OAuth callback)
//   useEffect(() => {
//     const handleOAuthCallback = () => {
//       const urlParams = new URLSearchParams(window.location.search)
//       const token = urlParams.get("token")

//       if (token && window.location.pathname === "/auth/callback") {
//         localStorage.setItem("token", token)
//         api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//         // Fetch user data
//         const fetchUser = async () => {
//           try {
//             const response = await api.get("/api/auth/me")
//             setUser(response.data.data)
//             toast.success("Successfully logged in with Google!")
//             navigate("/")
//           } catch (error) {
//             console.error("Error fetching user data:", error)
//             toast.error("Failed to complete authentication")
//           }
//         }

//         fetchUser()
//       }
//     }

//     handleOAuthCallback()
//   }, [navigate])

//   // Register user
//   const register = async (userData) => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/register", userData)

//       const { token, user } = response.data

//       localStorage.setItem("token", token)
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//       setUser(user)
//       toast.success("Registration successful! Welcome to ShopCart.")

//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Registration failed"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Login user
//   const login = async (credentials) => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/login", credentials)

//       const { token, user } = response.data

//       localStorage.setItem("token", token)
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//       setUser(user)
//       toast.success(`Welcome back, ${user.username}!`)

//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Login failed"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Admin login
//   const adminLogin = async (credentials) => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/admin/login", credentials)

//       const { token, user } = response.data

//       localStorage.setItem("token", token)
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

//       setUser(user)
//       toast.success(`Welcome, Admin ${user.username}!`)

//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Admin login failed"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Logout user
//   const logout = async () => {
//     try {
//       await api.get("/api/auth/logout")
//     } catch (error) {
//       console.error("Logout error:", error)
//     } finally {
//       localStorage.removeItem("token")
//       delete api.defaults.headers.common["Authorization"]
//       setUser(null)
//       toast.success("Logged out successfully. See you soon!")
//     }
//   }

//   // Check if user is admin
//   const isAdmin = () => {
//     return user && user.role === "admin"
//   }

//   // Switch user role (for demo purposes)
//   const switchRole = async () => {
//     try {
//       setLoading(true)
//       const response = await api.post("/api/auth/switch-role")
//       setUser(response.data.data)
//       toast.success(`Role switched to ${response.data.data.role}`)
//       return true
//     } catch (error) {
//       const message = error.response?.data?.message || "Failed to switch role"
//       toast.error(message)
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         register,
//         login,
//         adminLogin,
//         logout,
//         isAdmin,
//         switchRole,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// "use client"

// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import api from "../services/api"
// import { useNavigate } from "react-router-dom"
// import {
//   auth,
//   loginWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
//   logoutFirebase,
//   resetPassword,
// } from "../firebase/firebase"
// import { onAuthStateChanged } from "firebase/auth"

// const AuthContext = createContext()
// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate()

//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [authError, setAuthError] = useState(null)

//   // Check if user is logged in on initial load
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       setLoading(true)

//       if (firebaseUser) {
//         try {
//           // Get Firebase ID token
//           const idToken = await firebaseUser.getIdToken()

//           // Send token to backend to verify and get user data
//           api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

//           // Try to get user data from backend
//           try {
//             const response = await api.post("/api/auth/firebase-auth", {
//               email: firebaseUser.email,
//               displayName: firebaseUser.displayName,
//               photoURL: firebaseUser.photoURL,
//               uid: firebaseUser.uid,
//             })

//             // Set user data from backend
//             setUser(response.data.user)
//             localStorage.setItem("token", idToken)
//           } catch (backendError) {
//             console.error("Backend authentication error:", backendError)
//             // If backend fails, still use Firebase user data
//             setUser({
//               id: firebaseUser.uid,
//               email: firebaseUser.email,
//               username: firebaseUser.displayName || firebaseUser.email.split("@")[0],
//               profilePicture: firebaseUser.photoURL,
//               role: "user", // Default role
//             })
//           }
//         } catch (error) {
//           console.error("Firebase token error:", error)
//           setAuthError(error.message)
//         }
//       } else {
//         // No user is signed in
//         setUser(null)
//         delete api.defaults.headers.common["Authorization"]
//         localStorage.removeItem("token")
//       }

//       setLoading(false)
//     })

//     // Cleanup subscription
//     return () => unsubscribe()
//   }, [])

//   // Register user
//   const register = async (userData) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Register with Firebase
//       const firebaseUser = await registerWithEmailAndPassword(userData.email, userData.password)

//       // Register with backend
//       const response = await api.post("/api/auth/register", {
//         email: userData.email,
//         username: userData.username,
//         firebaseUid: firebaseUser.uid,
//       })

//       toast.success("Registration successful! Welcome to ShopCart.")
//       return true
//     } catch (error) {
//       console.error("Registration error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Registration failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Register admin
//   const registerAdmin = async (userData) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Register with Firebase
//       const firebaseUser = await registerWithEmailAndPassword(userData.email, userData.password)

//       // Register with backend as admin
//       const response = await api.post("/api/auth/register-admin", {
//         email: userData.email,
//         username: userData.username,
//         firebaseUid: firebaseUser.uid,
//         adminCode: userData.adminCode, // Special code to verify admin registration
//       })

//       toast.success("Admin registration successful!")
//       return true
//     } catch (error) {
//       console.error("Admin registration error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Admin registration failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Login user
//   const login = async (credentials) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Login with Firebase
//       await loginWithEmailAndPassword(credentials.email, credentials.password)

//       toast.success("Login successful!")
//       return true
//     } catch (error) {
//       console.error("Login error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Login failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Admin login
//   const adminLogin = async (credentials) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Login with Firebase
//       await loginWithEmailAndPassword(credentials.email, credentials.password)

//       // Verify admin role with backend
//       const idToken = await auth.currentUser.getIdToken()
//       api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

//       const response = await api.post("/api/auth/verify-admin")

//       if (!response.data.isAdmin) {
//         // If not admin, logout and show error
//         await logoutFirebase()
//         throw new Error("Not authorized as admin")
//       }

//       toast.success("Admin login successful!")
//       return true
//     } catch (error) {
//       console.error("Admin login error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Admin login failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Google login
//   const googleLogin = async () => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       await signInWithGoogle()

//       toast.success("Google login successful!")
//       return true
//     } catch (error) {
//       console.error("Google login error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Google login failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Forgot password
//   const forgotPassword = async (email) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       await resetPassword(email)

//       toast.success("Password reset email sent! Check your inbox.")
//       return true
//     } catch (error) {
//       console.error("Password reset error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Failed to send password reset email")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Logout user
//   const logout = async () => {
//     try {
//       setLoading(true)
//       await logoutFirebase()
//       toast.success("Logged out successfully")
//       return true
//     } catch (error) {
//       console.error("Logout error:", error)
//       toast.error(error.message || "Logout failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Check if user is admin
//   const isAdmin = () => {
//     return user && user.role === "admin"
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         error: authError,
//         register,
//         registerAdmin,
//         login,
//         adminLogin,
//         googleLogin,
//         forgotPassword,
//         logout,
//         isAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// "use client"

// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import api from "../services/api"
// import { useNavigate } from "react-router-dom"
// import {
//   auth,
//   loginWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
//   logoutFirebase,
//   resetPassword,
// } from "../firebase/firebase"
// import { onAuthStateChanged } from "firebase/auth"

// const AuthContext = createContext()
// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate()

//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [authError, setAuthError] = useState(null)

//   // Check if user is logged in on initial load
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       setLoading(true)

//       if (firebaseUser) {
//         try {
//           // Get Firebase ID token
//           const idToken = await firebaseUser.getIdToken()

//           // Send token to backend to verify and get user data
//           api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

//           // Try to get user data from backend
//           try {
//             const response = await api.post("/api/auth/firebase-auth", {
//               email: firebaseUser.email,
//               displayName: firebaseUser.displayName,
//               photoURL: firebaseUser.photoURL,
//               uid: firebaseUser.uid,
//             })

//             // Set user data from backend
//             setUser(response.data.user)
//             localStorage.setItem("token", idToken)
//           } catch (backendError) {
//             console.error("Backend authentication error:", backendError)
//             // If backend fails, still use Firebase user data
//             setUser({
//               id: firebaseUser.uid,
//               email: firebaseUser.email,
//               username: firebaseUser.displayName || firebaseUser.email.split("@")[0],
//               profilePicture: firebaseUser.photoURL,
//               role: "user", // Default role
//             })
//           }
//         } catch (error) {
//           console.error("Firebase token error:", error)
//           setAuthError(error.message)
//         }
//       } else {
//         // No user is signed in
//         setUser(null)
//         delete api.defaults.headers.common["Authorization"]
//         localStorage.removeItem("token")
//       }

//       setLoading(false)
//     })

//     // Cleanup subscription
//     return () => unsubscribe()
//   }, [])

//   // Register user
//   const register = async (userData) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Register with Firebase
//       const firebaseUser = await registerWithEmailAndPassword(userData.email, userData.password)

//       // Register with backend
//       const response = await api.post("/api/auth/register", {
//         email: userData.email,
//         username: userData.username,
//         firebaseUid: firebaseUser.uid,
//       })

//       toast.success("Registration successful! Welcome to ShopCart.")
//       return true
//     } catch (error) {
//       console.error("Registration error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Registration failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Register admin
//   const registerAdmin = async (userData) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Register with Firebase
//       const firebaseUser = await registerWithEmailAndPassword(userData.email, userData.password)

//       // Register with backend as admin
//       const response = await api.post("/api/auth/register-admin", {
//         email: userData.email,
//         username: userData.username,
//         firebaseUid: firebaseUser.uid,
//         adminCode: userData.adminCode, // Special code to verify admin registration
//       })

//       toast.success("Admin registration successful!")
//       return true
//     } catch (error) {
//       console.error("Admin registration error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Admin registration failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Login user
//   const login = async (credentials) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Login with Firebase
//       await loginWithEmailAndPassword(credentials.email, credentials.password)

//       toast.success("Login successful!")
//       return true
//     } catch (error) {
//       console.error("Login error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Login failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Admin login
//   const adminLogin = async (credentials) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       // Login with Firebase
//       await loginWithEmailAndPassword(credentials.email, credentials.password)

//       // Verify admin role with backend
//       const idToken = await auth.currentUser.getIdToken()
//       api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

//       const response = await api.post("/api/auth/verify-admin")

//       if (!response.data.isAdmin) {
//         // If not admin, logout and show error
//         await logoutFirebase()
//         throw new Error("Not authorized as admin")
//       }

//       toast.success("Admin login successful!")
//       return true
//     } catch (error) {
//       console.error("Admin login error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Admin login failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Create demo admin
//   const createDemoAdmin = async (adminSecret) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       const response = await api.post("/api/auth/create-demo-admin", { adminSecret })

//       toast.success(response.data.message)
//       return true
//     } catch (error) {
//       console.error("Demo admin creation error:", error)
//       setAuthError(error.message)
//       toast.error(error.response?.data?.message || "Failed to create demo admin")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Google login
//   const googleLogin = async () => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       await signInWithGoogle()

//       toast.success("Google login successful!")
//       return true
//     } catch (error) {
//       console.error("Google login error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Google login failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Forgot password
//   const forgotPassword = async (email) => {
//     try {
//       setLoading(true)
//       setAuthError(null)

//       await resetPassword(email)

//       toast.success("Password reset email sent! Check your inbox.")
//       return true
//     } catch (error) {
//       console.error("Password reset error:", error)
//       setAuthError(error.message)
//       toast.error(error.message || "Failed to send password reset email")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Logout user
//   const logout = async () => {
//     try {
//       setLoading(true)
//       await logoutFirebase()
//       toast.success("Logged out successfully")
//       return true
//     } catch (error) {
//       console.error("Logout error:", error)
//       toast.error(error.message || "Logout failed")
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Check if user is admin
//   const isAdmin = () => {
//     return user && user.role === "admin"
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         error: authError,
//         register,
//         registerAdmin,
//         login,
//         adminLogin,
//         googleLogin,
//         forgotPassword,
//         logout,
//         isAdmin,
//         createDemoAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
  logoutFirebase,
  resetPassword,
} from "../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState(null)

  // Check if user is logged in on initial load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true)

      if (firebaseUser) {
        try {
          // Get Firebase ID token
          const idToken = await firebaseUser.getIdToken(true) // Force refresh token

          // Set token in API headers
          api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

          // Try to get user data from backend
          try {
            const response = await api.post("/api/auth/firebase-auth", {
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              uid: firebaseUser.uid,
            })

            // Set user data from backend
            setUser(response.data.user)
            localStorage.setItem("token", idToken)
          } catch (backendError) {
            console.error("Backend authentication error:", backendError)
            // If backend fails, still use Firebase user data
            setUser({
              id: firebaseUser.uid,
              email: firebaseUser.email,
              username: firebaseUser.displayName || firebaseUser.email.split("@")[0],
              profilePicture: firebaseUser.photoURL,
              role: "user", // Default role
            })
          }
        } catch (error) {
          console.error("Firebase token error:", error)
          setAuthError(error.message)
        }
      } else {
        // No user is signed in
        setUser(null)
        delete api.defaults.headers.common["Authorization"]
        localStorage.removeItem("token")
      }

      setLoading(false)
    })

    // Cleanup subscription
    return () => unsubscribe()
  }, [])

  // Register user
  const register = async (userData) => {
    try {
      setLoading(true)
      setAuthError(null)

      // Register with Firebase
      const firebaseUser = await registerWithEmailAndPassword(userData.email, userData.password)

      // Register with backend
      const response = await api.post("/api/auth/register", {
        email: userData.email,
        username: userData.username,
        firebaseUid: firebaseUser.uid,
      })

      toast.success("Registration successful! Welcome to ShopCart.")
      return true
    } catch (error) {
      console.error("Registration error:", error)
      setAuthError(error.message)
      toast.error(error.message || "Registration failed")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Register admin
  const registerAdmin = async (userData) => {
    try {
      setLoading(true)
      setAuthError(null)

      // Register with Firebase
      const firebaseUser = await registerWithEmailAndPassword(userData.email, userData.password)

      // Get fresh token
      const idToken = await firebaseUser.getIdToken(true)
      api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

      // Register with backend as admin
      const response = await api.post("/api/auth/register-admin", {
        email: userData.email,
        username: userData.username,
        firebaseUid: firebaseUser.uid,
        adminCode: userData.adminCode, // Special code to verify admin registration
      })

      toast.success("Admin registration successful!")
      return true
    } catch (error) {
      console.error("Admin registration error:", error)
      setAuthError(error.message)
      toast.error(error.message || "Admin registration failed")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Login user
  const login = async (credentials) => {
    try {
      setLoading(true)
      setAuthError(null)

      // Login with Firebase
      await loginWithEmailAndPassword(credentials.email, credentials.password)

      toast.success("Login successful!")
      return true
    } catch (error) {
      console.error("Login error:", error)
      setAuthError(error.message)
      toast.error(error.message || "Login failed")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Admin login
  const adminLogin = async (credentials) => {
    try {
      setLoading(true)
      setAuthError(null)

      // Login with Firebase
      const userCredential = await loginWithEmailAndPassword(credentials.email, credentials.password)

      // Get fresh token
      const idToken = await userCredential.user.getIdToken(true)

      // Set token in API headers
      api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`

      // Verify admin role with backend
      const response = await api.post("/api/auth/verify-admin")

      if (!response.data.isAdmin) {
        // If not admin, logout and show error
        await logoutFirebase()
        throw new Error("Not authorized as admin")
      }

      toast.success("Admin login successful!")
      return true
    } catch (error) {
      console.error("Admin login error:", error)
      setAuthError(error.message)
      toast.error(error.response?.data?.message || error.message || "Admin login failed")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Google login
  const googleLogin = async () => {
    try {
      setLoading(true)
      setAuthError(null)

      await signInWithGoogle()

      toast.success("Google login successful!")
      return true
    } catch (error) {
      console.error("Google login error:", error)
      setAuthError(error.message)
      toast.error(error.message || "Google login failed")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Forgot password
  const forgotPassword = async (email) => {
    try {
      setLoading(true)
      setAuthError(null)

      await resetPassword(email)

      toast.success("Password reset email sent! Check your inbox.")
      return true
    } catch (error) {
      console.error("Password reset error:", error)
      setAuthError(error.message)
      toast.error(error.message || "Failed to send password reset email")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Logout user
  const logout = async () => {
    try {
      setLoading(true)
      await logoutFirebase()
      toast.success("Logged out successfully")
      return true
    } catch (error) {
      console.error("Logout error:", error)
      toast.error(error.message || "Logout failed")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Check if user is admin
  const isAdmin = () => {
    return user && user.role === "admin"
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error: authError,
        register,
        registerAdmin,
        login,
        adminLogin,
        googleLogin,
        forgotPassword,
        logout,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}