const Team = require("../models/Team.model");
const {
  successResponse,
  errorResponse,
} = require("../utils/response");

// GET all team members (ONLY active + sorted by order)
exports.getAllTeam = async (req, res) => {
  try {
    const team = await Team.find({ active: true }).sort({ order: 1 });
    successResponse(res, team);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

// ADD new team member
exports.createTeam = async (req, res) => {
  try {
    const member = new Team(req.body);
    await member.save();
    successResponse(res, member, 201);
  } catch (err) {
    errorResponse(res, err.message, 400);
  }
};
