const { Task } = require('../models');
const log = require('../models/mongo/log');

// Controller para manejar las operaciones CRUD de tareas

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { titulo, descripcion, estado, prioridad, fecha_vencimiento, id_usuario, id_proyecto } = req.body;
    const newTask = await Task.create({titulo, descripcion, estado, prioridad, fecha_vencimiento, id_usuario, id_proyecto});

    // Guarda el log de creación en MongoDB
    await log.create({
      action: 'Creó tarea',
      data: Object.values(newTask.dataValues)
    });

    return res.status(201).json(newTask);
  } catch (err) {
   return  res.status(500).json({ error: err.message });
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
    return res.status(500).json({ error: err.message });
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
    return res.status(500).json({ error: err.message });
  }
};

// Actualizar una tarea por ID
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    // Guarda el log de creación en MongoDB
    await log.create({
      action: 'Actualizó tarea',
      data: Object.values(task.dataValues)
    });

    await task.update(req.body);
    return res.json(task);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Eliminar una tarea por ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    // Guarda el log de eliminación en MongoDB
    await log.create({
      action: 'Eliminó tarea',
      data: Object.values(task.dataValues)
    });

    await task.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
