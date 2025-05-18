const { getUsersTaskProjects } = require('../services/userServices');

exports.getUserDetails = async (req, res) => {
  try {
    const user = await getUsersTaskProjects(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}