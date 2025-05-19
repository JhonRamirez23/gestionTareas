const { User } = require('../models');

// Controller para manejar las operaciones CRUD de usuarios

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { nombre, apellido, email, password, rol } = req.body;

    const alreadyExists = await User.findOne({ where: { email }});
    if (alreadyExists) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }
    
    const newUser = await User.create({ nombre, apellido, email, password, rol });
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(404).json({ error: 'No se encontraron usuarios' });
    }
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user === null) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Actualizar un usuario por ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user === null) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await user.update(req.body);
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user === null) {
      return es.status(404).json({ error: 'Usuario no encontrado' });
    }
    await user.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
