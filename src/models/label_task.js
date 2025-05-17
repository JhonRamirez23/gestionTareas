module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tarea_etiquetas', {
      // Llaves foráneas
      id_tarea: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'tareas',
          key: 'id_tarea',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      id_etiqueta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'etiquetas',
          key: 'id_etiqueta'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    {
      tableName: 'tarea_etiquetas',
      timestamps: true,
    }
  );
};
