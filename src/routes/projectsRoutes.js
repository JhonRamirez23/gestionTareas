const express = require('express');
const projects = require('../controller/projectsController');
const router = express.Router();

// Rutas para los controladores de tareas
router.get('/', projects.getAllProjects);
router.get('/:id', projects.getProjectById);
router.post('/', projects.createProject);
router.put('/:id', projects.updateProject);
router.delete('/:id', projects.deleteProject);

module.exports = router;