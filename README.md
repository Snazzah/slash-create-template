# slash-create-template
This templates helps you in creating slash commands from a webserver.

[View the TypeScript branch here](https://github.com/Snazzah/slash-create-template/tree/typescript)

| [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Snazzah/slash-create-template/tree/master) | [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/h6aVmv?referralCode=snazzah) |
|:-:|:-:|

## Installation
```sh
npx slash-up init js slash-commands
cd slash-commands
# this edit variables in the ".env" file!
# Create and edit commands in the `commands` folder
npx slash-up sync
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
