"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoadingSpinner from "../components/common/LoadingSpinner"

const AuthCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // The token handling is done in AuthContext
    // This component just shows a loading spinner
    // The user will be redirected to home after authentication is complete
    const timer = setTimeout(() => {
      navigate("/")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LoadingSpinner />
      <p className="mt-4 text-gray-600">Completing authentication, please wait...</p>
    </div>
  )
}

export default AuthCallback