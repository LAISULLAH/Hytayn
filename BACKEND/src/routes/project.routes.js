const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  createProject,
} = require("../controllers/project.controller");

router.get("/Hytayn/", getAllProjects);
router.post("/Hytayn/", createProject);

module.exports = router;
