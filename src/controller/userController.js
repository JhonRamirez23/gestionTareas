const { User } = require('../models');

exports.createUser = async (req, res) => {
  try {
    const user = await User.createUser(req.body);
    if (!user) {
      res.status(400).json({ error: 'Falló la creación de usuario' });
    }
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(404).json({ error: 'No se encontraron usuarios' });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
