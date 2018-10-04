require('./main');
const Logger = require('./logger');

Logger.customMessage('abc');
Logger.log('Kafka Service');
Logger.log('Heroku Service');
console.log(`Count:${Logger.count} [${Logger.name}]`);