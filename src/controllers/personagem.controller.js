const personagensService = require('../services/personagem.service');

const findAllPersonagensController = async (req, res) => {
  const personagens = await personagensService.findAllPersonagensService();
  if (personagens.length == 0) {
    return res.status(404).send({ message: 'Lista de personagens vazia' });
  }
  res.send(personagens);
};
const findByIdPersonagemController = async (req, res) => {
  const parametroId = Number(req.params.id);
  const choosePersonagem = await personagensService.findByIdPersonagemService(
    parametroId,
  );
  if (!choosePersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrada' });
  }
  res.send(choosePersonagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = personagensService.createPersonagemService(personagem);
  res.send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  const personagemEdit = req.body;
  const updatedPersonagem = personagensService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = req.params.id;
  personagensService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletada com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
