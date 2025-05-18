const { Project } = require('../models/proyects');

// Controller para manejar las operaciones CRUD de proyectos

// Crear un nuevo proyecto
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    if (!project) {
      return res.status(400).json({ error: 'Falló la creación del proyecto' });
    }
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // Obtener todos los proyectos
  exports.getAllProjects = async (req, res) => {
    try {
      const projects = await Project.findAll();
      if (!projects) {
        return res.status(404).json({ error: 'No se encontraron proyectos' });
      }
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Obtener un proyecto por ID
  exports.getProjectById = async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (!project) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
      }
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
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
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
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
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}