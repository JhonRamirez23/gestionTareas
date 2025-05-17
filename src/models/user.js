module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Usuario', {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING, unique: true },
    apellido: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING, allowNull: flase },
    apellido: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    rol: {type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'usuarios',
    timestamps: true
  });
};