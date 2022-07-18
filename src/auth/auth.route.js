const routes = require('express').Router();
const authController = require('./auth.controller');

routes.post('/login', authController.sessionController)

module.exports = routes;


