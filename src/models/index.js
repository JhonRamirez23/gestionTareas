const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User = require('./user')(sequelize, DataTypes);
const Project = require('./proyects')(sequelize, DataTypes);
const Task = require('./tasks')(sequelize, DataTypes);
const Label = require('./labels')(sequelize, DataTypes);
const LabelTask = require('./label_task')(sequelize, DataTypes);

// Definición de relaciones

// Usuario → Proyectos (1:N)
User.hasMany(Project, { foreignKey: 'id_usuario' });
Project.belongsTo(User, { foreignKey: 'id_usuario' });

// Usuario → Tareas (1:N)
User.hasMany(Task, { foreignKey: 'id_usuario' });
Task.belongsTo(User, { foreignKey: 'id_usuario' });

// Proyecto → Tareas (1:N)
Project.hasMany(Task, { foreignKey: 'id_proyecto' });
Task.belongsTo(Project, { foreignKey: 'id_proyecto' });

// Tarea ←→ Etiqueta (N:M)
Task.belongsToMany(Label, {
  through: 'tarea_etiquetas',
  foreignKey: 'id_tarea',
  otherKey: 'id_etiqueta',
});

Label.belongsToMany(Task, {
  through: 'tarea_etiquetas',
  foreignKey: 'id_etiqueta',
  otherKey: 'id_tarea',
});

module.exports = {
  sequelize,
  User,
  Project,
  Task,
  Label,
  LabelTask
};
