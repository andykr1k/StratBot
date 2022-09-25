const clientID = process.env['clientId']
const TOKEN = process.env['token']
const tradingfloor = process.env['tradingfloor']
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
 if (interaction.commandName === 'ping') {
   await interaction.reply('Pong!');
 }
});

client.on('message', (message) => {
  if (message.content == "hello") {
    message.reply("Hi! :)");
  }
});

client.login(TOKEN);
