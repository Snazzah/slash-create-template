require('dotenv').config();
const { SlashCreator, ExpressServer } = require('slash-create');
const path = require('path');

const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID,
  publicKey: process.env.DISCORD_PUBLIC_KEY,
  token: process.env.DISCORD_BOT_TOKEN,
  serverPort: 8020
});

creator.on('debug', (message) => console.log('debug:', message));
creator.on('warn', (message) => console.warn('warn:', message));
creator.on('error', (error) => console.error('error:', error));

creator
  .withServer(new ExpressServer())
  .registerCommandsIn(path.join(__dirname, 'commands'))
  .syncCommands()
  .startServer();

setTimeout(() => {
  console.log(require('require-all')(path.join(__dirname, 'commands')))
}, 5000)

// This should serve in localhost:8020/interactions
