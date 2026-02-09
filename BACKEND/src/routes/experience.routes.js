const express = require("express");
const router = express.Router();

const {
  getExperience,
  addExperience,
} = require("../controllers/experience.controller");

router.get("/Hytayn/BACKEND/", getExperience);
router.post("/Hytayn/BACKEND/", addExperience);

module.exports = router;
