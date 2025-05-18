const express = require('express');
const labelTask = require('../controller/label_taskController');
const router = express.Router();

// Rutas para los controladores de tareas
router.get('/', labelTask.getAllLabelTasks);
router.get('/:id', labelTask.getLabelTaskById);
router.post('/', labelTask.createLabelTask);
router.put('/:id', labelTask.updateLabelTask);
router.delete('/:id', labelTask.deleteLabelTask);

module.exports = router;