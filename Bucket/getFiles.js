const {Storage} = require('@google-cloud/storage');

const storage = new Storage();

function getFile(bucketName){
    storage
        .bucket(bucketName)
        .getFiles()
        .then(results=>{
            const files = results[0];

            console.log('Files:');
            files.forEach(file=>{
                console.log(file.name);
            });
        })
        .catch(err=>console.log('ERROR:',err));
}

module.exports.getFile = getFile;
