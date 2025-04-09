// // backend/models/user.model.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: [true, 'Username is required'],
//       unique: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       trim: true,
//       lowercase: true,
//       match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
//     },
//     password: {
//       type: String,
//       required: function() {
//         return !this.googleId; // Password is required only if not using Google auth
//       },
//       minlength: [6, 'Password must be at least 6 characters long'],
//     },
//     googleId: {
//       type: String,
//       unique: true,
//       sparse: true, // Allows null/undefined values
//     },
//     role: {
//       type: String,
//       enum: ['user', 'admin'],
//       default: 'user',
//     },
//     cart: [{
//       item: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Item',
//       },
//       quantity: {
//         type: Number,
//         default: 1,
//       },
//     }],
//     profilePicture: {
//       type: String,
//       default: '',
//     },
//   },
//   { timestamps: true }
// );

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password') || !this.password) return next();
  
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// export default User; 

// import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: [true, "Username is required"],
//       unique: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       trim: true,
//       lowercase: true,
//       match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
//     },
//     password: {
//       type: String,
//       required: function () {
//         return !this.googleId // Password is required only if not using Google auth
//       },
//       minlength: [6, "Password must be at least 6 characters long"],
//     },
//     googleId: {
//       type: String,
//       unique: true,
//       sparse: true, // Allows null/undefined values
//     },
//     role: {
//       type: String,
//       enum: ["user", "admin"],
//       default: "user",
//     },
//     cart: [
//       {
//         item: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Item",
//         },
//         quantity: {
//           type: Number,
//           default: 1,
//         },
//       },
//     ],
//     profilePicture: {
//       type: String,
//       default: "",
//     },
//     subscribedCourses: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Course",
//       },
//     ],
//   },
//   { timestamps: true },
// )

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password") || !this.password) return next()

//   try {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
//   } catch (error) {
//     next(error)
//   }
// })

// // Method to compare passwords
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password)
// }

// // Method to generate JWT token
// userSchema.methods.generateAuthToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   })
// }

// const User = mongoose.model("User", userSchema)

// export default User


import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    firebaseUid: {
      type: String,
      unique: true,
      sparse: true, // Allows null/undefined values
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    cart: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    profilePicture: {
      type: String,
      default: "",
    },
    subscribedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true },
)

const User = mongoose.model("User", userSchema)

export default User