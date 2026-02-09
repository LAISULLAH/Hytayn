const Project = require("../models/Project.model");
const {
  successResponse,
  errorResponse,
} = require("../utils/response");

// GET all projects (with optional featured and owner filters)
exports.getAllProjects = async (req, res) => {
  try {
    const { featured, owner } = req.query;

    const filter = {};
    if (featured !== undefined) {
      filter.featured = featured === "true";
    }
    if (owner) {
      filter.owner = owner;
    }

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    successResponse(res, projects);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

// ADD new project
exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    successResponse(res, project, 201);
  } catch (err) {
    errorResponse(res, err.message, 400);
  }
};
