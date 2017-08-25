const parse  = require('csv-parse');
const phones = require(__dirname + '/phones');

function parser(success) {
  const config = {
    delimeter: ',',
  };

  const callback = function(error, data) {
    error ? console.log(error) : phones(data).map(success);
  };

  return parse(config, callback);
}

module.exports = parser;
