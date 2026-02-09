const Experience = require("../models/Experience.model");

// GET /api/experience
exports.getExperience = async (req, res) => {
  try {
    const data = await Experience.find().sort({ order: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/experience
exports.addExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
