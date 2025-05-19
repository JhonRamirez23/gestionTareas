const { Label } = require('../models');

// Controller para manejar las operaciones CRUD de etiquetas

// Crear una nueva etiqueta
exports.createLabel = async (req, res) => {
  try {
    const label = await Label.create(req.body);

    return res.status(201).json(label);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener todas las etiquetas
exports.getAllLabels = async (req, res) => {
  try {
    const labels = await Label.findAll();
    if (labels.length === 0) {
      return res.status(404).json({ error: 'No se encontraron etiquetas' });
    }
    return res.json(labels);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener una etiqueta por ID
exports.getLabelById = async (req, res) => {
  try {
    const label = await Label.findByPk(req.params.id);
    if (!label) {
      return res.status(404).json({ error: 'Etiqueta no encontrada' });
    }
    return res.json(label);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Actualizar una etiqueta por ID
exports.updateLabel = async (req, res) => {
  try {
    const label = await Label.findByPk(req.params.id);
    if (!label) {
      return res.status(404).json({ error: 'Etiqueta no encontrada' });
    }
    await label.update(req.body);
    return res.json(label);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Eliminar una etiqueta por ID
exports.deleteLabel = async (req, res) => {
  try {
    const label = await Label.findByPk(req.params.id);
    if (!label) {
      return res.status(404).json({ error: 'Etiqueta no encontrada' });
    }
    await label.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};