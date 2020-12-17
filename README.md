# slash-create-template
This templates helps you in creating slash commands from a webserver.

## Installation
1. Install dependencies
```sh
npm i -g yarn # if you don't have it already
yarn install
```
2. Copy over `.env.example` into `.env` and fill in the variables.
3. Create any more commands you want.
4. `yarn start`

### Using PM2
1. `npm i -g pm2`
2. Follow the first, second and third step above
3. `pm2 start pm2.json`
4. (recommended) `pm2 dump`