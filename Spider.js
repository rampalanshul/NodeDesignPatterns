const fs = require('fs');
const https = require('https');


// function spider(url,callback){
//     const filename = getFileName(url);

//     fs.exists(filename,flag=>{
//         if(flag)
//             return callback(null,filename,true);
//     });
//     request(url,(err,))
// }


// spider(process.argv[2],(err,filename,downloaded)=>{
//     if(err)
//         // do something;
//         console.log();
//     else if(downloaded){
//             // again do something
//             console.log(`Dowloading of file ${filename} is complete..`);
//     }
// });



function showmovies(){
    https.get('https://yts.am/api/v2/list_movies.json',(response)=>{
        console.log(response);
    });
}

showmovies();



