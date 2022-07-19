const mongoose = require('mongoose');
const characterService = require('../services/service');

const findCharacterController = async (req, res) => {
  const todosCharacters = await characterService.findCharacterService();
  res.send(todosCharacters);
};
const findCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;
  const escolhaCharacter = await characterService.findCharacterByIdService(
    idParam,
  );
  res.send(escolhaCharacter);
};
const createCharacterController = async (req, res) => {
  const character = req.body;
  const novoCharacter = await characterService.createCharacterService(character);
  res.send(novoCharacter);
};
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const atualizadoCharacter = await characterService.updateCharacterService(
    idParam,
    characterEdit,
  );
  res.send(atualizadoCharacter);
};
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await characterService.deleteCharacterService(idParam);
  res.send({ message: 'Personagem deletado com sucesso' });
};
const searchCharactersController = async (req, res) => {
  const { character } = req.body;

  const characters = await characterService.searchCharactersService(character);

  if (characters.length === 0) {
    return res.status(400).send({ message: 'Personagem não encontrado' });
  }

  return res.send({
    results: characters.map((character) => ({
      id: character._id,
      name: character.name,
      image: character.imageUrl,
    })),
  });
};



module.exports = {
  findCharacterController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharactersController
};
