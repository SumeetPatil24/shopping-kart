import mongoose from "mongoose"

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    instructor: {
      type: String,
      required: [true, "Instructor name is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "All Levels"],
      default: "All Levels",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    enrolledStudents: {
      type: Number,
      default: 0,
    },
    lessons: [
      {
        title: String,
        description: String,
        duration: String,
        videoUrl: String,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

// Add text index for search functionality
courseSchema.index({ title: "text", description: "text", category: "text" })

const Course = mongoose.model("Course", courseSchema)

export default Course

