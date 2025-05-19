const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectsRoutes');
const labels = require('./routes/labelsRoutes');
const taskLabel = require('./routes/label_task');

app.use(cors());
app.use(express.json());

app.use('/)', (req, res) => {res.send("Escuchando API")};
app.use('/api/v1', (req, res) => { res.estatus(200).json({ status: 'ok'});
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/labels', labels);
app.use('/api/v1/task_label', taskLabel);

module.exports = app;
