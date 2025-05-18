const { User, Task, Project } = require('../models');

async function getUsersTaskProjects(id) {
  return await User.findByPk(id, {
    include: [
      { model: Task, as: 'tareas', attributes: ['titulo', 'estado', 'fecha_vencimiento'] },
      { model: Project, as: 'proyectos', attributes: ['nombre'] }
    ],
    attributes: ['nombre', 'apellido']
  });
}

module.exports = { getUsersTaskProjects };