const { Task } = require('../models/tasks');

// Controller para manejar las operaciones CRUD de tareas

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    if (!task) {
      return res.status(400).json({ error: 'Falló la creación de la tarea' });
    }
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // Obtener todas las tareas
  exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.findAll();
      if (!tasks) {
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
}