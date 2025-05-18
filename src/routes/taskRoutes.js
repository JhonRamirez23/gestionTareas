const express = require('express');
const task = require('../controller/taskControllers');
const router = express.Router();

// Rutas para los controladores de tareas
router.get('/', task.getAllTasks);
router.get('/:id', task.getTaskById);
router.post('/', task.createTask);
router.put('/:id', task.updateTask);
router.delete('/:id', task.deleteTask);

module.exports = router;