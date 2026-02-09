const express = require("express");
const router = express.Router();

const {
  getSkills,
  addSkill,
} = require("../controllers/skill.controller");

// GET /api/skills
router.get("/Hytayn/BACKEND/", getSkills);

// POST /api/skills
router.post("/Hytayn/BACKEND/", addSkill);

module.exports = router;
