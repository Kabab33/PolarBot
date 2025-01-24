// from https://www.youtube.com/watch?v=et_bzG3WJDg&list=PLAGWPY8arhLTuAGDgpFL6bhP6RuQ01p87&index=8
const path = require('path');
const getAllFiles = require('../utils/getAllFiles');
const { GatewayDispatchEvents } = require('discord.js');

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);
}

