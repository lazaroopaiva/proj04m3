const mongoose = require('mongoose');
const characterService = require('../services/service');

const validAll = async (req, res, next) => {
  const Characters = await characterService.findCharacterService();
  if (Characters.length == 0) {
    return res.status(400).send({ message: 'Character do not exists' });
  }
  next();
};
const idValid = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id do not exists' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (!character || !character.name || !character.imageUrl) {
    return res
      .status(400)
      .send({ mensagem: 'complete all informations about character' });
  }
  next();
};


module.exports = { validAll, idValid, validObjectBody};
