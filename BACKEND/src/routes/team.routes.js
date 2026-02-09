const express = require("express");
const router = express.Router();

const {
  getAllTeam,
  createTeam,
} = require("../controllers/team.controller");

const { sendMail } = require("../controllers/sendMail.controller");

// GET /api/team
router.get("/Hytayn/", getAllTeam);

// POST /api/team
router.post("/Hytayn/", createTeam);
router.post("/Hytayn/send-mail", sendMail);


module.exports = router;
