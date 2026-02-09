const express = require("express");
const router = express.Router();

const {
  getSkills,
  addSkill,
} = require("../controllers/skill.controller");

// GET /api/skills
router.get("/", getSkills);

// POST /api/skills
router.post("/", addSkill);

module.exports = router;
