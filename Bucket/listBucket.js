const {Storage} = require('@google-cloud/storage');

const storage = new Storage();

function listBuckets(){
    storage 
       .getBuckets()
       .then(results=>{
            const buckets = results[0];
            // console.log(buckets[0]);
            buckets.forEach(bucket => {
                console.log(bucket.name);
            });
       })
       .catch(err=>console.log(`ERROR:`,err));
}
module.exports.listBuckets = listBuckets;