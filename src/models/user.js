module.exports = (sequelize, DataTypes) => {
  return sequelize.define('usuario', {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING},
    apellido: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING },
  }, 
  {
    tableName: 'usuarios',
    timestamps: true
  });
};