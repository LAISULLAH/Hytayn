const Skill = require("../models/Skill.model");
const {
  successResponse,
  errorResponse,
} = require("../utils/response");

// GET /api/skills  (+ category filter)
exports.getSkills = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = { active: true };
    if (category) {
      filter.category = category;
    }

    const skills = await Skill.find(filter).sort({ order: 1 });
    successResponse(res, skills);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

// POST /api/skills
exports.addSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    successResponse(res, skill, 201);
  } catch (err) {
    errorResponse(res, err.message, 400);
  }
};
