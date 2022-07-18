const route = require('express').Router();
const controllerCharacter = require('../controllers/ApiController');
const {
  validAll,
  idValid,
  validObjectBody,
} = require('../middlewares/middleware');
const authMiddleware = require('../auth/auth.middleware');


route.get('/characters', authMiddleware.tokenAuth, validAll, controllerCharacter.findCharacterController);
route.get(
  '/find/:id',
  authMiddleware.tokenAuth,
  idValid,
  controllerCharacter.findCharacterByIdController,
);
route.post(
  '/create',
  authMiddleware.tokenAuth,
  validObjectBody,
  controllerCharacter.createCharacterController,
);
route.put(
  '/update/:id',
  authMiddleware.tokenAuth,
  idValid,
  validObjectBody,
  controllerCharacter.updateCharacterController,
);
route.delete(
  '/delete/:id',
  authMiddleware.tokenAuth,
  idValid,
  controllerCharacter.deleteCharacterController,
);

module.exports = route;
