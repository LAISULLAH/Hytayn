const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    organization: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["Education", "Internship", "Project", "Freelance"],
      required: true,
    },

    startDate: String,
    endDate: String,

    description: String,

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
