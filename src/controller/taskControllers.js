const { Task } = require('../models');

// Controller para manejar las operaciones CRUD de tareas

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { titulo, descripcion, estado, prioridad, fecha_vencimiento } = req.body;
    const newTask = await Task.create({ titulo, descripcion, estado, prioridad, fecha_vencimiento });

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    if (tasks.length === 0) {
      return res.status(404).json({ error: 'No se encontraron tareas' });
    }
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una tarea por ID
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una tarea por ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    await task.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
