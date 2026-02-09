const express = require("express");
const router = express.Router();

const {
  getSkills,
  addSkill,
} = require("../controllers/skill.controller");

// GET /api/skills
router.get("/Hytayn/", getSkills);

// POST /api/skills
router.post("/Hytayn/", addSkill);

module.exports = router;
