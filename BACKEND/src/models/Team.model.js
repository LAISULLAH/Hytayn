const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
    },
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      instagram: String
    },
    order: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// 🔴 THIS LINE IS CRITICAL
module.exports = mongoose.model("Team", teamSchema);
