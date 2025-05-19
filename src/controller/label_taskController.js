const { LabelTask } = require('../models');

// Controller para manejar las operaciones CRUD de etiquetas de tareas

// Crear una nueva etiqueta de tarea
exports.createLabelTask = async (req, res) => {
  try {
    const labelTask = await LabelTask.create(req.body);
    
    return res.status(201).json(labelTask);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener todas las etiquetas de tareas
exports.getAllLabelTasks = async (req, res) => {
  try {
    const labelTasks = await LabelTask.findAll();
    if (labelTasks.length === 0) {
      return res.status(404).json({ error: 'No se encontraron etiquetas de tareas' });
    }
    return res.json(labelTasks);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener una etiqueta de tarea por ID
exports.getLabelTaskById = async (req, res) => {
  try {
    const labelTask = await LabelTask.findByPk(req.params.id);
    if (!labelTask) {
      return res.status(404).json({ error: 'Etiqueta de tarea no encontrada' });
    }
    return res.json(labelTask);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Actualizar una etiqueta de tarea por ID
exports.updateLabelTask = async (req, res) => {
  try {
    const labelTask = await LabelTask.findByPk(req.params.id);
    if (!labelTask) {
      return res.status(404).json({ error: 'Etiqueta de tarea no encontrada' });
    }
    await labelTask.update(req.body);
    return res.json(labelTask);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Eliminar una etiqueta de tarea por ID
exports.deleteLabelTask = async (req, res) => {
  try {
    const labelTask = await LabelTask.findByPk(req.params.id);
    if (!labelTask) {
      return res.status(404).json({ error: 'Etiqueta de tarea no encontrada' });
    }
    await labelTask.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};