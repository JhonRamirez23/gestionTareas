module.exports = (sequelize, DataTypes) => {
  return sequelize.define('etiquetas', {
    id_etiqueta: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'etiquetas',
    timestamps: true
  });
};