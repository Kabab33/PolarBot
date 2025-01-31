// from https://www.youtube.com/watch?v=et_bzG3WJDg&list=PLAGWPY8arhLTuAGDgpFL6bhP6RuQ01p87&index=8module.exports = async (client, guildid) => {
    let applicationCommands

    if (guildid) {
        const guild = await client.guilds.fetch(guildid);
        applicationCommands = guild.commands;
    } else {
        applicationCommands = client.application.commands;
    }

    await applicationCommands.fetch();
    return applicationCommands;
}