const express = require('express');
const labels = require('../controller/labelsController');
const router = express.Router();

// Rutas para los controladores de tareas
router.get('/', labels.getAllLabels);
router.get('/:id', labels.getLabelById);
router.post('/', labels.createLabel);
router.put('/:id', labels.updateLabel);
router.delete('/:id', labels.deleteLabel);

module.exports = router;