// "use client"

// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { FaArrowLeft, FaStar, FaStarHalfAlt, FaUser, FaClock, FaGraduationCap, FaCheck, FaLock } from "react-icons/fa"
// import { useAuth } from "../context/AuthContext"
// import api from "../services/api"
// import LoadingSpinner from "../components/common/LoadingSpinner"
// import { toast } from "react-toastify"

// const CourseDetails = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const { user } = useAuth()
//   const [course, setCourse] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [activeTab, setActiveTab] = useState("overview")
//   const [isEnrolled, setIsEnrolled] = useState(false)
//   const [enrolling, setEnrolling] = useState(false)

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         setLoading(true)
//         const response = await api.get(`/api/courses/${id}`)
//         setCourse(response.data.data)

//         // Check if user is enrolled
//         if (user) {
//           const enrolledResponse = await api.get("/api/courses/user/enrolled")
//           const enrolledCourses = enrolledResponse.data.data
//           setIsEnrolled(enrolledCourses.some((c) => c._id === id))
//         }
//       } catch (error) {
//         console.error("Error fetching course:", error)
//         setError("Failed to load course details. Please try again later.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchCourse()
//   }, [id, user])

//   const handleGoBack = () => {
//     navigate(-1)
//   }

//   const handleEnroll = async () => {
//     if (!user) {
//       toast.info("Please login to enroll in this course")
//       navigate("/login")
//       return
//     }

//     try {
//       setEnrolling(true)
//       await api.post(`/api/courses/${id}/enroll`)
//       setIsEnrolled(true)
//       toast.success(`Successfully enrolled in ${course.title}`)
//     } catch (error) {
//       console.error("Error enrolling in course:", error)
//       toast.error(error.response?.data?.message || "Failed to enroll in course")
//     } finally {
//       setEnrolling(false)
//     }
//   }

//   if (loading) return <LoadingSpinner />

//   if (error) {
//     return (
//       <div className="text-center py-12 mt-20">
//         <p className="text-red-500 mb-4">{error}</p>
//         <button
//           onClick={handleGoBack}
//           className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//         >
//           <FaArrowLeft className="mr-2" /> Go Back
//         </button>
//       </div>
//     )
//   }

//   if (!course) {
//     return (
//       <div className="text-center py-12 mt-20">
//         <p className="text-gray-600 mb-4">Course not found</p>
//         <button
//           onClick={handleGoBack}
//           className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//         >
//           <FaArrowLeft className="mr-2" /> Go Back
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className="mt-20 container mx-auto px-4 py-8">
//       <button onClick={handleGoBack} className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
//         <FaArrowLeft className="mr-2" /> Back to Courses
//       </button>

//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="md:flex">
//           {/* Course Image Section */}
//           <div className="md:w-2/5 relative">
//             <div className="aspect-video md:aspect-square overflow-hidden">
//               {course.imageUrl ? (
//                 <img
//                   src={course.imageUrl || "/placeholder.svg"}
//                   alt={course.title}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
//                   <FaGraduationCap className="text-indigo-400 text-6xl" />
//                 </div>
//               )}
//             </div>

//             {/* Course badges */}
//             <div className="absolute top-4 left-4 flex flex-col space-y-2">
//               <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{course.category}</span>
//               <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">{course.level}</span>
//             </div>
//           </div>

//           {/* Course Details Section */}
//           <div className="p-6 md:w-3/5">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>

//                 <div className="flex items-center mb-4">
//                   <div className="flex text-amber-400">
//                     {[...Array(5)].map((_, i) => {
//                       if (i < Math.floor(course.rating)) {
//                         return <FaStar key={i} />
//                       } else if (i === Math.floor(course.rating) && course.rating % 1 !== 0) {
//                         return <FaStarHalfAlt key={i} />
//                       } else {
//                         return <FaStar key={i} className="text-gray-300" />
//                       }
//                     })}
//                   </div>
//                   <span className="text-gray-600 ml-2">
//                     {course.rating.toFixed(1)} ({course.enrolledStudents} students)
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center mb-4 text-gray-600">
//               <div className="flex items-center mr-4">
//                 <FaUser className="mr-2 text-indigo-600" />
//                 <span>Instructor: {course.instructor}</span>
//               </div>
//               <div className="flex items-center">
//                 <FaClock className="mr-2 text-indigo-600" />
//                 <span>Duration: {course.duration}</span>
//               </div>
//             </div>

//             <div className="mb-6">
//               <p className="text-gray-600">{course.description}</p>
//             </div>

//             <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">What you'll learn</h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                 {course.lessons.slice(0, 4).map((lesson, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-2" />
//                     <span className="text-gray-700">{lesson.title}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex items-center justify-between">
//               <div>
//                 <span className="text-3xl font-bold text-indigo-600">${course.price.toFixed(2)}</span>
//               </div>

//               {isEnrolled ? (
//                 <button
//                   className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
//                   disabled
//                 >
//                   <FaCheck className="mr-2" />
//                   Enrolled
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleEnroll}
//                   className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 flex items-center"
//                   disabled={enrolling}
//                 >
//                   {enrolling ? "Enrolling..." : "Enroll Now"}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Course Tabs */}
//         <div className="border-t border-gray-200">
//           <div className="flex border-b border-gray-200">
//             <button
//               className={`px-6 py-3 font-medium ${activeTab === "overview" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </button>
//             <button
//               className={`px-6 py-3 font-medium ${activeTab === "curriculum" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
//               onClick={() => setActiveTab("curriculum")}
//             >
//               Curriculum
//             </button>
//             <button
//               className={`px-6 py-3 font-medium ${activeTab === "instructor" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
//               onClick={() => setActiveTab("instructor")}
//             >
//               Instructor
//             </button>
//           </div>

//           <div className="p-6">
//             {activeTab === "overview" && (
//               <div className="prose max-w-none">
//                 <h3 className="text-xl font-semibold mb-4">About this course</h3>
//                 <p className="text-gray-600 mb-4">{course.description}</p>

//                 <h3 className="text-xl font-semibold mb-4 mt-6">Requirements</h3>
//                 <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                   <li>Basic understanding of the subject</li>
//                   <li>A computer with internet access</li>
//                   <li>Willingness to learn and practice</li>
//                 </ul>

//                 <h3 className="text-xl font-semibold mb-4 mt-6">Who this course is for</h3>
//                 <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                   <li>Students interested in {course.category}</li>
//                   <li>Professionals looking to expand their skills</li>
//                   <li>Anyone curious about {course.title.toLowerCase()}</li>
//                 </ul>
//               </div>
//             )}

//             {activeTab === "curriculum" && (
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Course Content</h3>
//                 <p className="text-gray-600 mb-4">
//                   {course.lessons.length} lessons • {course.duration} total
//                 </p>

//                 <div className="space-y-4 mt-6">
//                   {course.lessons.map((lesson, index) => (
//                     <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
//                       <div className="flex justify-between items-center p-4 bg-gray-50">
//                         <div className="flex items-center">
//                           <span className="bg-indigo-100 text-indigo-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
//                             {index + 1}
//                           </span>
//                           <h4 className="font-medium">{lesson.title}</h4>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="text-sm text-gray-500 mr-3">{lesson.duration}</span>
//                           {isEnrolled ? <FaLock className="text-gray-400" /> : <FaLock className="text-gray-400" />}
//                         </div>
//                       </div>
//                       {isEnrolled && (
//                         <div className="p-4 border-t border-gray-200">
//                           <p className="text-gray-600 text-sm">{lesson.description}</p>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === "instructor" && (
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Meet Your Instructor</h3>
//                 <div className="flex items-start">
//                   <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
//                     <FaUser className="text-indigo-400 text-2xl" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-medium">{course.instructor}</h4>
//                     <p className="text-gray-500 mb-3">{course.category} Expert</p>
//                     <p className="text-gray-600">
//                       An experienced instructor with expertise in {course.category}. Passionate about teaching and
//                       helping students achieve their learning goals.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseDetails

"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaUser, FaClock, FaGraduationCap, FaCheck, FaLock } from "react-icons/fa"
import { useAuth } from "../context/AuthContext"
import api from "../services/api"
import LoadingSpinner from "../components/common/LoadingSpinner"
import { toast } from "react-toastify"

const CourseDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [enrolling, setEnrolling] = useState(false)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true)

        // Validate ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
          throw new Error("Invalid course ID format")
        }

        const response = await api.get(`/api/courses/${id}`)
        setCourse(response.data.data)

        // Check if user is enrolled
        if (user) {
          try {
            const enrolledResponse = await api.get("/api/courses/user/enrolled")
            const enrolledCourses = enrolledResponse.data.data
            setIsEnrolled(enrolledCourses.some((c) => c._id === id))
          } catch (enrollError) {
            console.error("Error checking enrollment status:", enrollError)
            // Don't set error state here, just log it
          }
        }
      } catch (error) {
        console.error("Error fetching course:", error)
        setError(error.message || "Failed to load course details. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [id, user])

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleEnroll = async () => {
    if (!user) {
      toast.info("Please login to enroll in this course")
      navigate("/login")
      return
    }

    try {
      setEnrolling(true)
      await api.post(`/api/courses/${id}/enroll`)
      setIsEnrolled(true)
      toast.success(`Successfully enrolled in ${course.title}`)
    } catch (error) {
      console.error("Error enrolling in course:", error)
      toast.error(error.response?.data?.message || "Failed to enroll in course")
    } finally {
      setEnrolling(false)
    }
  }

  if (loading) return <LoadingSpinner />

  if (error) {
    return (
      <div className="text-center py-12 mt-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="text-center py-12 mt-20">
        <p className="text-gray-600 mb-4">Course not found</p>
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="mt-20 container mx-auto px-4 py-8">
      <button onClick={handleGoBack} className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Courses
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Course Image Section */}
          <div className="md:w-2/5 relative">
            <div className="aspect-video md:aspect-square overflow-hidden">
              {course.imageUrl ? (
                <img
                  src={course.imageUrl || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                  <FaGraduationCap className="text-indigo-400 text-6xl" />
                </div>
              )}
            </div>

            {/* Course badges */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{course.category}</span>
              <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">{course.level}</span>
            </div>
          </div>

          {/* Course Details Section */}
          <div className="p-6 md:w-3/5">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>

                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => {
                      if (i < Math.floor(course.rating)) {
                        return <FaStar key={i} />
                      } else if (i === Math.floor(course.rating) && course.rating % 1 !== 0) {
                        return <FaStarHalfAlt key={i} />
                      } else {
                        return <FaStar key={i} className="text-gray-300" />
                      }
                    })}
                  </div>
                  <span className="text-gray-600 ml-2">
                    {course.rating.toFixed(1)} ({course.enrolledStudents} students)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-4 text-gray-600">
              <div className="flex items-center mr-4">
                <FaUser className="mr-2 text-indigo-600" />
                <span>Instructor: {course.instructor}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-indigo-600" />
                <span>Duration: {course.duration}</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">{course.description}</p>
            </div>

            <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What you'll learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.lessons &&
                  course.lessons.slice(0, 4).map((lesson, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2" />
                      <span className="text-gray-700">{lesson.title}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-indigo-600">${course.price.toFixed(2)}</span>
              </div>

              {isEnrolled ? (
                <button
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
                  disabled
                >
                  <FaCheck className="mr-2" />
                  Enrolled
                </button>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 flex items-center"
                  disabled={enrolling}
                >
                  {enrolling ? "Enrolling..." : "Enroll Now"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Course Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium ${activeTab === "overview" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "curriculum" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
              onClick={() => setActiveTab("curriculum")}
            >
              Curriculum
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "instructor" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}
              onClick={() => setActiveTab("instructor")}
            >
              Instructor
            </button>
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">About this course</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <h3 className="text-xl font-semibold mb-4 mt-6">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Basic understanding of the subject</li>
                  <li>A computer with internet access</li>
                  <li>Willingness to learn and practice</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 mt-6">Who this course is for</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Students interested in {course.category}</li>
                  <li>Professionals looking to expand their skills</li>
                  <li>Anyone curious about {course.title.toLowerCase()}</li>
                </ul>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                <p className="text-gray-600 mb-4">
                  {course.lessons && course.lessons.length} lessons • {course.duration} total
                </p>

                <div className="space-y-4 mt-6">
                  {course.lessons &&
                    course.lessons.map((lesson, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center p-4 bg-gray-50">
                          <div className="flex items-center">
                            <span className="bg-indigo-100 text-indigo-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                              {index + 1}
                            </span>
                            <h4 className="font-medium">{lesson.title}</h4>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-3">{lesson.duration}</span>
                            {isEnrolled ? <FaLock className="text-gray-400" /> : <FaLock className="text-gray-400" />}
                          </div>
                        </div>
                        {isEnrolled && (
                          <div className="p-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">{lesson.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {activeTab === "instructor" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Meet Your Instructor</h3>
                <div className="flex items-start">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <FaUser className="text-indigo-400 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{course.instructor}</h4>
                    <p className="text-gray-500 mb-3">{course.category} Expert</p>
                    <p className="text-gray-600">
                      An experienced instructor with expertise in {course.category}. Passionate about teaching and
                      helping students achieve their learning goals.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails