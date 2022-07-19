const routes = require('express').Router();
const authController = require('./auth.controller');

routes.post('/login', authController.logInController)

module.exports = routes;


