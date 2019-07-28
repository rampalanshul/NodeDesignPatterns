const fs = require('fs')
const zlib = require('zlib');
const http = require('http');
const file = process.argv[2];

// GZIP using Buffered API
fs.readFile('./resources/'+file,(err,buffer)=>{
    zlib.gzip(buffer,(err,buffer)=>{
        fs.writeFile('./resources/'+file+'.gz',buffer,err=>{
          if (err)
            console.log(err);
          else
            console.log('File compressed successfully....');
        });
    });
});

// GZIP using Streams
// fs.createReadStream('./resources/'+file)
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('./resources/'+file+".gz"))
//   .on('finish',() => console.log('File successfully compressed...'));



