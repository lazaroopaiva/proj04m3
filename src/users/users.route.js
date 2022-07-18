const routes = require('express').Router();
const userController = require('./users.controller');

routes.post("/create", userController.createUserController);
routes.get("/findAllUsers", userController.findUserController);

module.exports = routes;


