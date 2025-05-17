module.exports = (sequelize, DataTypes) => {
  return sequelize.define('proyectos', {
    id_proyecto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: false },

    // Llave foránea
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, 
  {
    tableName: 'proyectos',
    timestamps: true
  });
};