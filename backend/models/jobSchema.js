import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title"],
    minLength: [3, "Job title must contain 3 characters!"],
    maxLength: [50, "Job title cannot exceed 50 character!"],
  },
  description: {
    type: String,
    required: [true, "Please provide job description"],
    minLength: [3, "Job description must contain at least 50 characters!"],
    maxLength: [350, "Job decription cannot exceed 350 character!"],
  },
  category: {
    type: String,
    required: [true, "Job category is requireed!"],
  },
  country: {
    type: String,
    required: [true, "Job country is required!"],
  },
  city: {
    type: String,
    required: [true, "JOb city is required!"],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location!"],
    minLength: [50, "Job location must contain at least 50 characters!"],
  },
  fixedSalary: {
    type: Number,
    minlength: [4, "Fixed salary must contain at least 4 digits!"],
    maxLength: [9, "Fixed salary cannot exceed 9 digits!"],
  },
  salaryFrom: {
    type: Number,
    minlength: [4, "Salary from must contain at least 4 digits!"],
    maxLength: [9, "Salary from cannot exceed 9 digits!"],
  },
  salaryTo: {
    type: Number,
    minlength: [4, "Salary to must contain at least 4 digits!"],
    maxLength: [9, "Salary to cannot exceed 9 digits!"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
