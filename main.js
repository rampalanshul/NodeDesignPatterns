//const Logger = require('./logger.js');


// const DbLogger = new Logger('DBLogger');
// DbLogger.info('Connected to DB');
// const accessLogger = new Logger('AccessLogger');
// accessLogger.info('Access Provided');
//Logger.log('DB');
//Logger.log('Service');

//console.log(`${Logger.count} ${Logger.name}`);
require('./logger').customMessage = (Message)=>{
    console.log('Fuck you...');
}
console.log(module.exports);