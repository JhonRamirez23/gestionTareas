require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');
const mongoose = require('./config/mongo');

const PORT = process.env.PORT || 8080;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión con base de datos exitosa');
    // return sequelize.sync(); // sincroniza el modelo
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(error => console.error('Error conectando con la base de datos:', error));

  // Conexión a MongoDB
 
