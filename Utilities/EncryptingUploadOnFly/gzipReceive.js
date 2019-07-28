const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const crypto = require('crypto');
// creating the server
const server = http.createServer((req,res)=>{
    const fileName = req.headers.filename;
    console.log('File request received: ' +fileName);

    req.pipe(crypto.createDecipher('aes192','welcome'))
       .pipe(zlib.createGunzip())
       .pipe(fs.createWriteStream(fileName))
       .on('finish',()=>{
            res.writeHead(201,{'Content-Type':'text/plain'});
            res.end('That\'s it');
            console.log(`File ${fileName} saved..`);
       });
});

server.listen(2500, ()=>{
 console.log('server started...');
});
