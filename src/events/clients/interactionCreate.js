module.exports = {
    name: "interactionCreate",
    async execute(interaction, client){
        if ( interaction.isChatInputCommand()){
            const { commands } = client;
            const { commandName } = interaction;
            const commmand = commands.get(commandName);
            if (!command)  return;

            try {
                await command.execute(interaction, client);
            } catch(error){
                console.error(error);
                await interaction.reply({
                    content: "Something went wrong while executing as command...",
                    ephemeral: true
                })
            }
        }
    }
};