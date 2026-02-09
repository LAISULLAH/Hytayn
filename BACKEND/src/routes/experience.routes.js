const express = require("express");
const router = express.Router();

const {
  getExperience,
  addExperience,
} = require("../controllers/experience.controller");

router.get("/Hytayn/", getExperience);
router.post("/Hytayn/", addExperience);

module.exports = router;
