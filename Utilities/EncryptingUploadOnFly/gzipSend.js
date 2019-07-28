const fs = require('fs');
const zlib = require('zlib');
const fileNm = 'resources/'+process.argv[2];
const http = require('http');
const server = process.argv[3];
const path = require('path');
const crypto = require('crypto');
// Featuring Spatial Efficiency and Time Efficiency

const options = {
    hostname : server,
    port     : 2500,
    path     : '/',
    method   : 'PUT',
    headers  : {
        filename : path.basename(fileNm),
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'gzip'
    }
};

const req = http.request(options,res=>{
    console.log('Server Response: '+ res.statusCode);
});

fs.createReadStream(fileNm)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher('aes192','welcome'))
  .pipe(req)
  .on('finish',()=>{
    console.log('File sent successfully');
  });

