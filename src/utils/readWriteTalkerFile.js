const fs = require('fs/promises');

const readTalkerFile = async () => {
  // try {
    const arrTalker = await fs.readFile('src/talker.json', 'utf8');

    return JSON.parse(arrTalker);
  // } catch (error) {
    // return null;
  // }
};

module.exports = {
  readTalkerFile,
};
