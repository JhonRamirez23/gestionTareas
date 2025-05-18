const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Servicio corriendo en MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

module.exports = mongoose;
