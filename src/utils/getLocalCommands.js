// from https://www.youtube.com/watch?v=et_bzG3WJDg&list=PLAGWPY8arhLTuAGDgpFL6bhP6RuQ01p87&index=8
const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = (exceptions = []) => {
    let localCommands = [];
    const commandCategoreis = getAllFiles(path.join(__dirname, '..', 'commands'), true);


    for (const commandCategory of commandCategoreis) {
        const commandFiles = getAllFiles(commandCategory);

        for (const commandFile of commandFiles) {
            const commandObject = require(commandFile);

            if (exceptions.includes(commandObject.name)) continue;
            localCommands.push(commandObject);
            

        }
    }
}