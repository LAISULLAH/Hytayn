const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    techStack: [String],

    owner: {
      type: String, // "Azaan Mansuri", "Ayaan Mansuri", "Laisullah Bloch"
      required: true
    },

    github: String,
    liveUrl: String,

    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
