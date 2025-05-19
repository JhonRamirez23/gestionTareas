const { Project } = require('../models');

// Controller para manejar las operaciones CRUD de proyectos

// Crear un nuevo proyecto
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    
    return res.status(201).json(project);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    if (!projects) {
      return res.status(404).json({ error: 'No se encontraron proyectos' });
    }
    return res.json(projects);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener un proyecto por ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    return res.json(project);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Actualizar un proyecto por ID
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    await project.update(req.body);
    return res.json(project);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Eliminar un proyecto por ID
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    await project.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
