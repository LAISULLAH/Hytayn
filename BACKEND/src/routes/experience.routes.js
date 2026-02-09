const express = require("express");
const router = express.Router();

const {
  getExperience,
  addExperience,
} = require("../controllers/experience.controller");

router.get("/", getExperience);
router.post("/", addExperience);

module.exports = router;
