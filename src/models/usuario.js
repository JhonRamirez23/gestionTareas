module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    correo: {
      type: DataTypes.STRING,
      unique: true
    },
    contraseña: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    tableName: 'usuarios',
    timestamps: false
  });
};
