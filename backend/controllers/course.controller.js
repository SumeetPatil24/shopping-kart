// import Course from "../models/course.model.js"
// import User from "../models/user.model.js"

// // Get all courses
// export const getCourses = async (req, res, next) => {
//   try {
//     const { category, search, level, sort, page = 1, limit = 10 } = req.query

//     // Build query
//     const query = {}

//     if (category) {
//       query.category = category
//     }

//     if (level) {
//       query.level = level
//     }

//     if (search) {
//       query.$text = { $search: search }
//     }

//     // Build sort options
//     let sortOptions = {}
//     if (sort) {
//       const sortFields = sort.split(",")
//       sortFields.forEach((field) => {
//         if (field.startsWith("-")) {
//           sortOptions[field.substring(1)] = -1
//         } else {
//           sortOptions[field] = 1
//         }
//       })
//     } else {
//       sortOptions = { createdAt: -1 }
//     }

//     // Pagination
//     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

//     // Execute query
//     const courses = await Course.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

//     // Get total count
//     const total = await Course.countDocuments(query)

//     res.status(200).json({
//       success: true,
//       count: courses.length,
//       total,
//       pagination: {
//         page: Number.parseInt(page),
//         limit: Number.parseInt(limit),
//         totalPages: Math.ceil(total / Number.parseInt(limit)),
//       },
//       data: courses,
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Get single course
// export const getCourse = async (req, res, next) => {
//   try {
//     const course = await Course.findById(req.params.id)

//     if (!course) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found",
//       })
//     }

//     res.status(200).json({
//       success: true,
//       data: course,
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Create new course
// export const createCourse = async (req, res, next) => {
//   try {
//     // Check if user is admin
//     if (req.user.role !== "admin") {
//       return res.status(403).json({
//         success: false,
//         message: "Not authorized to create courses",
//       })
//     }

//     const course = await Course.create(req.body)

//     res.status(201).json({
//       success: true,
//       data: course,
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Update course
// export const updateCourse = async (req, res, next) => {
//   try {
//     // Check if user is admin
//     if (req.user.role !== "admin") {
//       return res.status(403).json({
//         success: false,
//         message: "Not authorized to update courses",
//       })
//     }

//     const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     })

//     if (!course) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found",
//       })
//     }

//     res.status(200).json({
//       success: true,
//       data: course,
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Delete course
// export const deleteCourse = async (req, res, next) => {
//   try {
//     // Check if user is admin
//     if (req.user.role !== "admin") {
//       return res.status(403).json({
//         success: false,
//         message: "Not authorized to delete courses",
//       })
//     }

//     const course = await Course.findByIdAndDelete(req.params.id)

//     if (!course) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found",
//       })
//     }

//     res.status(200).json({
//       success: true,
//       data: {},
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Enroll in a course
// export const enrollCourse = async (req, res, next) => {
//   try {
//     const { courseId } = req.params

//     // Check if course exists
//     const course = await Course.findById(courseId)
//     if (!course) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found",
//       })
//     }

//     // Check if user is already enrolled
//     const user = await User.findById(req.user.id)
//     if (user.subscribedCourses.includes(courseId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Already enrolled in this course",
//       })
//     }

//     // Add course to user's subscribed courses
//     user.subscribedCourses.push(courseId)
//     await user.save()

//     // Increment enrolled students count
//     course.enrolledStudents += 1
//     await course.save()

//     res.status(200).json({
//       success: true,
//       message: "Successfully enrolled in the course",
//       data: {
//         course,
//         user: {
//           id: user._id,
//           username: user.username,
//           email: user.email,
//           subscribedCourses: user.subscribedCourses,
//         },
//       },
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Get user's enrolled courses
// export const getEnrolledCourses = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id).populate("subscribedCourses")

//     res.status(200).json({
//       success: true,
//       count: user.subscribedCourses.length,
//       data: user.subscribedCourses,
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // Get featured courses
// export const getFeaturedCourses = async (req, res, next) => {
//   try {
//     const courses = await Course.find({ featured: true }).limit(6)

//     res.status(200).json({
//       success: true,
//       count: courses.length,
//       data: courses,
//     })
//   } catch (error) {
//     next(error)
//   }
// }


import Course from "../models/course.model.js"
import User from "../models/user.model.js"
import mongoose from "mongoose"

// Get all courses
export const getCourses = async (req, res, next) => {
  try {
    const { category, search, level, sort, page = 1, limit = 10 } = req.query

    // Build query
    const query = {}

    if (category) {
      query.category = category
    }

    if (level) {
      query.level = level
    }

    if (search) {
      query.$text = { $search: search }
    }

    // Build sort options
    let sortOptions = {}
    if (sort) {
      const sortFields = sort.split(",")
      sortFields.forEach((field) => {
        if (field.startsWith("-")) {
          sortOptions[field.substring(1)] = -1
        } else {
          sortOptions[field] = 1
        }
      })
    } else {
      sortOptions = { createdAt: -1 }
    }

    // Pagination
    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    // Execute query
    const courses = await Course.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

    // Get total count
    const total = await Course.countDocuments(query)

    res.status(200).json({
      success: true,
      count: courses.length,
      total,
      pagination: {
        page: Number.parseInt(page),
        limit: Number.parseInt(limit),
        totalPages: Math.ceil(total / Number.parseInt(limit)),
      },
      data: courses,
    })
  } catch (error) {
    next(error)
  }
}

// Get single course
export const getCourse = async (req, res, next) => {
  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID format",
      })
    }

    const course = await Course.findById(req.params.id)

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      })
    }

    res.status(200).json({
      success: true,
      data: course,
    })
  } catch (error) {
    console.error("Error fetching course:", error)
    next(error)
  }
}

// Create new course
export const createCourse = async (req, res, next) => {
  try {
    // Check if user is admin
    if (req.userRole !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to create courses",
      })
    }

    const course = await Course.create(req.body)

    res.status(201).json({
      success: true,
      data: course,
    })
  } catch (error) {
    next(error)
  }
}

// Update course
export const updateCourse = async (req, res, next) => {
  try {
    // Check if user is admin
    if (req.userRole !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update courses",
      })
    }

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID format",
      })
    }

    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      })
    }

    res.status(200).json({
      success: true,
      data: course,
    })
  } catch (error) {
    next(error)
  }
}

// Delete course
export const deleteCourse = async (req, res, next) => {
  try {
    // Check if user is admin
    if (req.userRole !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete courses",
      })
    }

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID format",
      })
    }

    const course = await Course.findByIdAndDelete(req.params.id)

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      })
    }

    res.status(200).json({
      success: true,
      data: {},
    })
  } catch (error) {
    next(error)
  }
}

// Enroll in a course
export const enrollCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID format",
      })
    }

    // Check if course exists
    const course = await Course.findById(courseId)
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      })
    }

    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    // Check if user is already enrolled
    if (user.subscribedCourses.includes(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled in this course",
      })
    }

    // Add course to user's subscribed courses
    user.subscribedCourses.push(courseId)
    await user.save()

    // Increment enrolled students count
    course.enrolledStudents += 1
    await course.save()

    res.status(200).json({
      success: true,
      message: "Successfully enrolled in the course",
      data: {
        course,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          subscribedCourses: user.subscribedCourses,
        },
      },
    })
  } catch (error) {
    next(error)
  }
}

// Get user's enrolled courses
export const getEnrolledCourses = async (req, res, next) => {
  try {
    // Find user by Firebase UID
    const user = await User.findOne({ firebaseUid: req.user.uid }).populate("subscribedCourses")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    res.status(200).json({
      success: true,
      count: user.subscribedCourses.length,
      data: user.subscribedCourses,
    })
  } catch (error) {
    next(error)
  }
}

// Get featured courses
export const getFeaturedCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ featured: true }).limit(6)

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    })
  } catch (error) {
    next(error)
  }
}