const personagensService = require('../services/personagem.service');

const findAllPersonagensController = async (req, res) => {
  const personagens = personagensService.findAllPersonagensService();
  if (personagens.length == 0) {
    return res.status(404).send({ message: 'Lista de personagens vazia' });
  }
  res.send(personagens);
};
const findByIdPersonagemController = async (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(400).send({ message: 'id inválido' });
  }
  const choosePersonagem =
    personagensService.findByIdPersonagemService(parametroId);
  if (!choosePersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrada' });
  }
  res.send(choosePersonagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  if (
    !personagem ||
    !personagem.nome ||
    !personagem.personagem ||
    !personagem.descricao ||
    !personagem.imagem ||
    !personagem.idade ||
    !personagem.nacionalidade ||
    !personagem.carreira
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do personagem' });
  }
  const newPersonagem = personagensService.createPersonagemService(personagem);
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'id inválido' });
  }
  const personagemEdit = req.body;

  if (
    !personagemEdit ||
    !personagemEdit.nome ||
    !personagemEdit.personagem ||
    !personagemEdit.descricao ||
    !personagemEdit.imagem ||
    !personagemEdit.idade ||
    !personagemEdit.nacionalidade ||
    !personagemEdit.carreira
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do personagem' });
  }
  const updatedPersonagem = personagensService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'id inválido' });
  }

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
