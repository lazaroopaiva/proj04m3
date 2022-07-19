const Character = require('../models/model');

const findCharacterService = async () => {
  const characters = await Character.find();
  return characters;
};
const findCharacterByIdService = async (id) => {
  const character = await Character.findById(id);
  return character;
};
const createCharacterService = async (newCharacter) => {
  const createdCharacter = await Character.create(newCharacter);
  return createdCharacter;
};
const updateCharacterService = async (id, editedCharacter) => {
  const updatedCharacter = await Character.findByIdAndUpdate(
    id,
    editedCharacter,
  ).setOptions({ returnOriginal: false });
  return updatedCharacter;
};
const deleteCharacterService = async (id) => {
  await Character.findByIdAndDelete(id);
};
const findOne = async (newCharacter) => {
  const dbCharacter = await Character.findOne({
    tarefa: newCharacter.name,
  }).exec();
  return dbCharacter;
};
const searchCharactersService = async (name) => {
  const searchResult = await Character.find({
    name: { $regex: `${name || ''}`, $options: 'i' },
  });

  return searchResult;
};

module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
  findOne,
  searchCharactersService
};
