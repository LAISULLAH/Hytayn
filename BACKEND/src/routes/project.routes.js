const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  createProject,
} = require("../controllers/project.controller");

router.get("/Hytayn/BACKEND/", getAllProjects);
router.post("/Hytayn/BACKEND/", createProject);

module.exports = router;
