const { LabelTask } = require('../models/label_task');

// Controller para manejar las operaciones CRUD de etiquetas de tareas

// Crear una nueva etiqueta de tarea
exports.createLabelTask = async (req, res) => {
  try {
    const labelTask = await LabelTask.create(req.body);
    if (!labelTask) {
      return res.status(400).json({ error: 'Falló la creación de la etiqueta de tarea' });
    }
    res.status(201).json(labelTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las etiquetas de tareas
exports.getAllLabelTasks = async (req, res) => {
  try {
    const labelTasks = await LabelTask.findAll();
    if (!labelTasks) {
      return res.status(404).json({ error: 'No se encontraron etiquetas de tareas' });
    }
    res.json(labelTasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una etiqueta de tarea por ID
exports.getLabelTaskById = async (req, res) => {
  try {
    const labelTask = await LabelTask.findByPk(req.params.id);
    if (!labelTask) {
      return res.status(404).json({ error: 'Etiqueta de tarea no encontrada' });
    }
    res.json(labelTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    res.json(labelTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};