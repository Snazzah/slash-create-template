# slash-create-template
This templates helps you in creating slash commands in TypeScript from a webserver.

## Installation
```sh
npx slash-up init typescript slash-commands
cd slash-commands
# edit variables in the ".env" file!
# Create and edit commands in the `commands` folder
yarn build
yarn start
```

### Using PM2
```sh
npm i -g pm2
# Follow the installation process above
pm2 start pm2.json
pm2 dump # recommended
```
