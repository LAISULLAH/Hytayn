const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    // Skill name (e.g. Cyber Security, React.js)
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Category (Cyber Security, Web Development, AI & ML, etc.)
    category: {
      type: String,
      required: true,
      trim: true,
    },

    // Skill level (0–100)
    level: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },

    // Owner / Person name
    // (Laisullah Bloch, Azaan Mansuri, Ayaan Mansuri)
    owner: {
      type: String,
      required: true,
      trim: true,
    },

    // Optional icon name (frontend use)
    icon: {
      type: String,
      trim: true,
    },

    // Order for sorting in UI
    order: {
      type: Number,
      default: 0,
    },

    // Active / inactive toggle
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Skill", skillSchema);
