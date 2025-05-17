module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tareas', {
    id_tarea: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: true },
    prioridad: { type: DataTypes.STRING },
    fecha_vencimiento: { type: DataTypes.STRING, allowNull: false },
    // Llaves foráneas
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        references: {
          model: 'proyectos',
          key: 'id_proyecto'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
  }, 
  {
    tableName: 'tareas',
    timestamps: true
  });
};