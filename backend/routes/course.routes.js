import express from "express"
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  getEnrolledCourses,
  getFeaturedCourses,
} from "../controllers/course.controller.js"
import { protect, authorize } from "../middleware/auth.middleware.js"

const router = express.Router()

// Public routes
router.get("/", getCourses)
router.get("/featured", getFeaturedCourses)
router.get("/:id", getCourse)

// Protected routes
router.use(protect)
router.get("/user/enrolled", getEnrolledCourses)
router.post("/:courseId/enroll", enrollCourse)

// Admin routes
router.post("/", authorize("admin"), createCourse)
router.put("/:id", authorize("admin"), updateCourse)
router.delete("/:id", authorize("admin"), deleteCourse)

export default router

