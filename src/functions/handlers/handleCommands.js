const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/V9');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync("./src/commands");
        for ( const folder of commandFolders){
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith(".js"));

            const { commands, commandsArray } = client
            for ( const file of commandFiles){
                const command = fs
                    .readdirSync(`../../commands/${folder}/${file}`)
                    .filter((file) => file.endsWith(".js"));
                commands.set(command.data.name, command);
                commandsArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passed through the handler.`);
            }
        }
        const clientID = '892188797834498059';
        const guildID = '892188797834498059';
        const rest = new REST({version: '9'}).setToken(process.env.token);
        try{
            console.log("Starting Refresh Application with (/) Commands");
            await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
                body: client.commandArray,
            });
        } catch(error){
            console.error(error);
        }
    };
};