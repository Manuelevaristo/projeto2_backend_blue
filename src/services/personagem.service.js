const personagens = [
  {
    id: 1,
    nome: 'Matthew Lyn Lillard',
    personagem: 'Salsicha Rogers (Shaggy)',
    descricao:
      'Salsicha Rogers, que tem o nome de Norville, mas o detesta e prefere ser chamado de Salsicha, é o dono de Scooby-Doo. É um sujeito magricelo e de aparência desleixada (seu apelido em inglês — Shaggy — quer dizer "desgrenhado"), sempre com um cavanhaque por fazer e com olheiras. Assim como seu cão, Salsicha é covarde, medroso e faminto, dividindo com Scooby a paixão por guloseimas, sanduíches, sorvetes e outras delícias. Tem pavor dos fantasmas e é o primeiro a não querer participar dos casos. Sempre se dá mal com os vilões, mas acaba dando sorte e os capturando com ajuda de Scooby. É o mais engraçado da turma e o mais criativo quando tem que se esconder dos fantasmas. É dele o bordão que dá título ao desenho em inglês — "Scooby-Doo, cadê você?" — e ainda a frase "Que tal um lanchinho, Scooby?". Salsicha é o mais velho da turma como podem ver em Scooby-Doo 3.',
    imagem:
      'https://br.web.img2.acsta.net/c_310_420/pictures/19/06/25/20/05/4707243.jpg',
    idade: 52,
    nacionalidade: 'Americano',
    carreira: 26,
  },
  {
    id: 2,
    nome: 'Frederick James Prinze Jr',
    personagem: 'Fred',
    descricao:
      'Fred Jones, diferente de Salsicha, é corajoso, sendo o líder do grupo. Sempre ávido por um novo mistério, porém, em certas ocasiões, é lerdo — mesmo assim, não perde a graça. Cria engenhocas para se defender dos inimigos e suas paixões são armadilhas e Daphne Blake. Suas frases preferidas são: "Temos mais um mistério em nossas mãos!", "Vamos cair fora, turma!", "Vamos nos dividir, turma!" e "Vamos nos separar e procurar pistas!".',
    foto: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/73/05/20273851.jpg',
    idade: 46,
    nacionalidade: 'Americano',
    carreira: 25,
  },
  {
    id: 3,
    nome: 'SARAH MICHELLE GELLAR',
    personagem: 'Daphne',
    descricao:
      'Daphne Blake, filha de milionários, é o alvo preferido dos vilões que, muitas vezes, a raptam, mas ela sempre é esperta o bastante para escapar e improvisar soluções em situações inusitadas. Daphne foi inspirada em Indira Stefanianna Christopherson, atriz de voz dos estúdios DePatie-Freleng, que, além da voz, emprestou seus traços para a criação da personagem. Daphne e Fred tem um lado amoroso,que é assumido oficial e abertamente na série Scooby-Doo Mistério S/A (onde eles se tornam namorados) e no futuro filme da franquia Scooby-Doo Stage Fright, onde ela assume que está apaixonada por Fred Jones.',
    imagem:
      'https://br.web.img3.acsta.net/c_310_420/pictures/20/02/19/16/51/3067552.jpg',
    idade: 44,
    nacionalidade: 'Americana',
    carreira: 34,
  },
  {
    id: 4,
    nome: 'Linda Edna Cardellini',
    personagem: 'Velma',
    descricao:
      'Velma Dinkley é uma garota inteligente e cheia de ideias que desvenda os mistérios com Fred. Velma é a melhor amiga de Daphne. Sempre com alguma tirada científica, encontra soluções lógicas para resolver casos complexos. Suas principais frases são "Hum… Acho que finalmente estou começando a entender esse mistério", "Meus óculos… Não consigo ver sem meus óculos!" e "Gente!" (Jinkies! no original). Usa óculos, camisa com gola enorme laranja, saia vermelha de bailarina, sapatos vermelhos-escuros também de bailarina e meias laranja enormes.',
    imagem:
      'https://br.web.img3.acsta.net/c_310_420/pictures/17/07/12/16/12/353727.jpg',
    idade: 46,
    nacionalidade: 'Americana',
    carreira: 24,
  },
  {
    id: 5,
    nome: 'Neil Fanning',
    personagem: 'Scooby-Doo',
    descricao:
      'Scooby Doo é o apelido de Scoobert-Doo, um cachorro covarde. Tem medo da própria sombra e, sem querer, acaba salvando a turma ou pegando os vilões. Sempre impulsionado pela promessa de um bom lanche, biscoitos caninos (os Biscoitos Scooby) ou caramelos. Ele encerra cada episódio "falando" "Scooby-Dooby-Doo-oo-oo !!!".',
    imagem:
      'https://image.tmdb.org/t/p/original/bOeVV04QAKMNRQocVPNsyFesjth.jpg',
    idade: 55,
    nacionalidade: 'Autraliano',
    carreira: 35,
  },
];

const findAllPersonagensService = () => {
  return personagens;
};

const findByIdPersonagemService = (IdParam) => {
  return personagens.find((personagem) => personagem.id === IdParam);
};

const createPersonagemService = (newPersonagem) => {
  const newId = personagens.length + 1;
  newPersonagem.id = newId;
  personagens.push(newPersonagem);
  return newPersonagem;
};
const updatePersonagemService = (id, personagemEdited) => {
  personagemEdited['id'] = id;
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id,
  );
  personagens[personagemIndex] = personagemEdited;
  return personagemEdited;
};
const deletePersonagemService = (id) => {
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id,
  );
  return personagens.splice(personagemIndex, 1);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
