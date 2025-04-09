"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaSearch, FaFilter, FaGraduationCap, FaStar, FaUser, FaClock } from "react-icons/fa"
import api from "../services/api"
import LoadingSpinner from "../components/common/LoadingSpinner"

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        {course.imageUrl ? (
          <img src={course.imageUrl || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
            <FaGraduationCap className="text-indigo-400 text-4xl" />
          </div>
        )}
        <div className="absolute top-0 left-0 m-2">
          <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{course.category}</span>
        </div>
        <div className="absolute top-0 right-0 m-2">
          <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">{course.level}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>

        <div className="flex items-center mb-3 text-sm text-gray-600">
          <FaUser className="mr-1 text-indigo-500" />
          <span className="mr-3">{course.instructor}</span>
          <FaClock className="mr-1 text-indigo-500" />
          <span>{course.duration}</span>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(course.rating) ? "text-amber-400" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({course.enrolledStudents} students)</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-indigo-600">${course.price.toFixed(2)}</span>
          <Link
            to={`/courses/${course._id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [level, setLevel] = useState("")
  const [categories, setCategories] = useState([])
  const [levels, setLevels] = useState(["Beginner", "Intermediate", "Advanced", "All Levels"])
  const [showFilters, setShowFilters] = useState(false)
  const [sorting, setSorting] = useState("newest")

  useEffect(() => {
    fetchCourses()
  }, [category, level, searchTerm, sorting])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()

      if (category) {
        params.append("category", category)
      }

      if (level) {
        params.append("level", level)
      }

      if (searchTerm) {
        params.append("search", searchTerm)
      }

      // Add sorting parameter
      if (sorting === "priceAsc") {
        params.append("sort", "price")
      } else if (sorting === "priceDesc") {
        params.append("sort", "-price")
      } else if (sorting === "newest") {
        params.append("sort", "-createdAt")
      } else if (sorting === "rating") {
        params.append("sort", "-rating")
      }

      const response = await api.get(`/api/courses?${params.toString()}`)
      setCourses(response.data.data)

      // Extract unique categories
      const uniqueCategories = [...new Set(response.data.data.map((course) => course.category))]
      setCategories(uniqueCategories)
    } catch (error) {
      console.error("Error fetching courses:", error)
      setError("Failed to load courses. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchCourses()
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setCategory("")
    setLevel("")
    setSorting("newest")
  }

  if (loading && courses.length === 0) return <LoadingSpinner />

  return (
    <div className="mt-20 container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Courses</h1>
        <p className="text-gray-600">Discover new skills, expand your knowledge, and advance your career</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800">
              {category ? `${category} Courses` : level ? `${level} Level Courses` : "All Courses"}
            </h2>
            {(category || level || searchTerm) && (
              <button onClick={clearFilters} className="ml-4 text-sm text-indigo-600 hover:text-indigo-800">
                Clear Filters
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <select
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <button
              onClick={toggleFilters}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300"
            >
              <FaFilter size={14} />
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
            </button>

            <form onSubmit={handleSearch} className="flex w-full sm:w-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses..."
                className="w-full sm:w-auto pl-4 pr-10 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition duration-300"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </div>

        {/* Advanced filters panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="category-all"
                      name="category"
                      checked={category === ""}
                      onChange={() => setCategory("")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
                      All Categories
                    </label>
                  </div>

                  {categories.map((cat, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${idx}`}
                        name="category"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${idx}`} className="ml-2 text-sm text-gray-700">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="level-all"
                      name="level"
                      checked={level === ""}
                      onChange={() => setLevel("")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="level-all" className="ml-2 text-sm text-gray-700">
                      All Levels
                    </label>
                  </div>

                  {levels.map((lvl, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="radio"
                        id={`level-${idx}`}
                        name="level"
                        checked={level === lvl}
                        onChange={() => setLevel(lvl)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`level-${idx}`} className="ml-2 text-sm text-gray-700">
                        {lvl}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Courses Grid */}
      {error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error}</div>
      ) : courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <FaGraduationCap className="mx-auto text-gray-300 mb-4" size={64} />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No courses found</h2>
          <p className="text-gray-600 mb-4">Try a different search or filter.</p>
          <button
            onClick={clearFilters}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            View All Courses
          </button>
        </div>
      )}
    </div>
  )
}

export default Courses