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

module.exports = {
  readTalkerFile,
  getTalkerById,
};
