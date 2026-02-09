const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const teamRoutes = require("./routes/team.routes");
const projectRoutes = require("./routes/project.routes");
const experienceRoutes = require("./routes/experience.routes");
const skillRoutes = require("./routes/skill.routes");

const app = express(); 

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// TEST ROUTE (IMPORTANT)
app.get("/test", (req, res) => {
  res.json({ message: "Backend connected successfully " });
});

// routes
app.use("/api/team", teamRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/skills", skillRoutes);

module.exports = app;
