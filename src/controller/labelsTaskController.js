const { Lab } = require('../models/labels');

// Controller para manejar las operaciones CRUD de etiquetas

// Crear una nueva etiqueta
exports.createLabel = async (req, res) => {
  try {
    const label = await Lab.create(req.body);
    if (!label) {
      return res.status(400).json({ error: 'Falló la creación de la etiqueta' });
    }
    res.status(201).json(label);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las etiquetas
exports.getAllLabels = async (req, res) => {
  try {
    const labels = await Lab.findAll();
    if (!labels) {
      return res.status(404).json({ error: 'No se encontraron etiquetas' });
    }
    res.json(labels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una etiqueta por ID
exports.getLabelById = async (req, res) => {
  try {
    const label = await Lab.findByPk(req.params.id);
    if (!label) {
      return res.status(404).json({ error: 'Etiqueta no encontrada' });
    }
    res.json(label);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una etiqueta por ID
exports.updateLabel = async (req, res) => {
  try {
    const label = await Lab.findByPk(req.params.id);
    if (!label) {
      return res.status(404).json({ error: 'Etiqueta no encontrada' });
    }
    await label.update(req.body);
    res.json(label);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una etiqueta por ID
exports.deleteLabel = async (req, res) => {
  try {
    const label = await Lab.findByPk(req.params.id);
    if (!label) {
      return res.status(404).json({ error: 'Etiqueta no encontrada' });
    }
    await label.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};