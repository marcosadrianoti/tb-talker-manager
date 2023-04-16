const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    const arrTalker = await fs.readFile('src/talker.json', 'utf8');

    return JSON.parse(arrTalker);
  } catch (error) {
    return null;
  }
};

const getTalkerById = async (id) => {
    const numberId = Number(id);
    const talkers = await readTalkerFile();
    const talker = talkers.find((t) => t.id === numberId);
    return talker;
};

const getTalkerByTerm = async (term) => {
  const talkers = await readTalkerFile();
  const filteredTalkersByTerm = talkers.filter((t) => t.name.includes(term));
  return filteredTalkersByTerm;
};

const getTalkerByRate = async (rate, filteredTalkers) => {
  let talkers = await readTalkerFile();
  if (filteredTalkers.length !== 0) talkers = filteredTalkers;

  const filteredTalkersByRate = talkers.filter((t) => t.talk.rate === Number(rate));
  return filteredTalkersByRate;
};

const getTalkerByDate = async (date, filteredTalkers) => {
  let filteredTalkersByDate = await readTalkerFile();
  if (date !== '') {
    const talkers = filteredTalkers.length !== 0 ? filteredTalkers : await readTalkerFile();
    filteredTalkersByDate = talkers.filter((t) => t.talk.watchedAt === date);
  }
  return filteredTalkersByDate;
};

const getTalkerLastId = async () => {
  const arrTalkers = await readTalkerFile();
  return arrTalkers.length;
};

const insertNewTalker = async (talker) => {
  try {
    const arrTalkers = await readTalkerFile();
    arrTalkers.push(talker);

    return await fs.writeFile('src/talker.json', JSON.stringify(arrTalkers));
  } catch (error) {
    return null;
  }
};

const saveEditedTalker = async (id, talker) => {
  const talkers = await readTalkerFile();
  const talkersFilter = talkers.filter((talkerPerson) => talkerPerson.id !== id);
  const talkerEdited = {
    id,
    ...talker,
  };
  talkersFilter.push(talkerEdited);
  await fs.writeFile('src/talker.json', JSON.stringify(talkersFilter));
};

const deleteTalker = async (id) => {
  const talkers = await readTalkerFile();
  const talkersFilter = talkers.filter((talkerPerson) => talkerPerson.id !== id);
  await fs.writeFile('src/talker.json', JSON.stringify(talkersFilter));
};

module.exports = {
  readTalkerFile,
  getTalkerById,
  getTalkerLastId,
  insertNewTalker,
  saveEditedTalker,
  deleteTalker,
  getTalkerByTerm,
  getTalkerByRate,
  getTalkerByDate,
};
