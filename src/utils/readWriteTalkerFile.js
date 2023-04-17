const fs = require('fs/promises');

const TALKER_FILE = 'src/talker.json';

const readTalkerFile = async () => {
  try {
    const arrTalker = await fs.readFile(TALKER_FILE, 'utf8');

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

    return await fs.writeFile(TALKER_FILE, JSON.stringify(arrTalkers));
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
  await fs.writeFile(TALKER_FILE, JSON.stringify(talkersFilter));
};

const EditRateById = async (id, rate) => {
  const talkers = await readTalkerFile();
  const originalTalker = talkers.find((talkerPerson) => talkerPerson.id === id);
  const talkersWithinOriginalTalker = talkers.filter((talkerPerson) => talkerPerson.id !== id);

  const EditedTalker = {
    ...originalTalker,
    talk: {
      ...originalTalker.talk,
      rate,
    },
  };

  talkersWithinOriginalTalker.push(EditedTalker);
  await fs.writeFile(TALKER_FILE, JSON.stringify(talkersWithinOriginalTalker));
};

const deleteTalker = async (id) => {
  const talkers = await readTalkerFile();
  const talkersFilter = talkers.filter((talkerPerson) => talkerPerson.id !== id);
  await fs.writeFile(TALKER_FILE, JSON.stringify(talkersFilter));
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
  EditRateById,
};
