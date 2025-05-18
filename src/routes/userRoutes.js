const express = require('express');
const userController = require('../controller/userController');
const serviceController = require('../controller/requestServicesController');
const router = express.Router();

// Rutas para los controladores de usuarios
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/:id/details', serviceController.getUserDetails);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
