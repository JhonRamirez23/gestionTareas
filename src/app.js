const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectsRoutes');
const labels = require('./routes/labelsRoutes');
const taskLabel = require('./routes/label_task');
const dotenv = require('dotenv');
dotenv.config(); 

// Protege la API de otras conexiones
app.use(cors({
  origin: process.env.SERVER_HOST,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => { res.send("Servidor corriendo en Railway")});
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/labels', labels);
app.use('/task_label', taskLabel);

// Manejador de errores para rutas no encontradas
app.use((req, res) => { res.sendStatus(404).json({ error: 'Ruta no encontrada' }) });

module.exports = app;
