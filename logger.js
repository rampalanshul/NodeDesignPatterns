// function Logger(name){
//     this.name = name;
// }

// Logger.prototype.log = function(message){
//     console.log(`[${this.name}] ${message}`);
// };

// Logger.prototype.info = function(message){
//     this.log(`info:${message}`);
// };

class Logger{
    constructor(name){
        this.count=0;
        this.name=name;
    }
    log(message){
        this.count++;
        console.log(`[${this.name}] ${message}`);
    }
    info(message){
        this.log(`info: ${message}`);
    }
    verbose(message){
        console.log(`verbose:${message}`);
    }
}

// module.exports = Logger;
module.exports = new Logger('DEFAULT');