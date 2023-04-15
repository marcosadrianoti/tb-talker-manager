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

module.exports = {
  readTalkerFile,
  getTalkerById,
  getTalkerLastId,
  insertNewTalker,
  saveEditedTalker,
};
