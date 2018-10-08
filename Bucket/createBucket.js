// Google Cloud
const Storage = require('@google-cloud/storage').Storage;

// GCP project ID
const projectId = 'original-advice-135023';

// Creates a client
const storage = new Storage(); 

// Name of the new bucket
const bucketName = 'nature-images';

// Creates the new bucket

function createBucket(){
    storage
    .createBucket(bucketName, {
        location: 'ASIA',
        storageClass: 'COLDLINE',
      })
    .then(()=>console.log(`Bucket ${bucketName} created.`))
    .catch(err=>console.error(`ERROR: ${err}`));    
}

module.exports.createBucket=createBucket;

