# slash-create-template in TypeScript
This templates helps you in creating slash commands in TypeScript from a webserver.

| [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Snazzah/slash-create-template/tree/typescript) | [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FSnazzah%2Fslash-create-template%2Ftree%2Ftypescript&envs=DISCORD_APP_ID%2CDISCORD_PUBLIC_KEY%2CDISCORD_BOT_TOKEN&DISCORD_APP_IDDesc=The+application+ID+of+the+Discord+app&DISCORD_PUBLIC_KEYDesc=The+public+key+of+the+Discord+app&DISCORD_BOT_TOKENDesc=The+bot+token+of+the+Discord+app&referralCode=snazzah) |
|:-:|:-:|

## Installation
```sh
npx slash-up init typescript slash-commands
cd slash-commands
# edit variables in the ".env" file!
# Create and edit commands in the `commands` folder
npx slash-up sync
yarn build
yarn start
```

### From Railway/Heroku
For Railway and Heroku users, you must sync commands locally to push any command changes to Discord. You can do this by using `slash-up sync` within your Git repository.

Heroku users will have their commands synced when they initially deploy to Heroku.

### Using PM2
```sh
npm i -g pm2
# Follow the installation process above
pm2 start pm2.json
pm2 dump # recommended
```
