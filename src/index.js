require('dotenv').config();

const fs      = require('fs');
const parser  = require(__dirname + '/parser');
const message = require(__dirname + '/message');

fs.createReadStream(__dirname + '/index.csv').pipe(parser(message));
