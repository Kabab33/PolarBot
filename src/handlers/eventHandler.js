// from https://www.youtube.com/watch?v=et_bzG3WJDg&list=PLAGWPY8arhLTuAGDgpFL6bhP6RuQ01p87&index=8
const path = require('path');
const getAllFiles = require('../utils/getAllFiles');
const { GatewayDispatchEvents } = require('discord.js');

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

    for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);
        let eventName;

        eventName = eventFolder.replace(/\\/g, '/').split('/').pop();

        eventName === "validations" ? eventName = "interactionCreate" : eventName;

        client.on(eventName, async (arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        }
        );
    }

}

