const cluster = require('cluster')
const os = require('os')

// simulating the scaling of the application using cluster mode...
if(cluster.isMaster){
    const cpus = os.cpus().length;
    console.log(`Clustering to ${cpus} CPUs`)
    for(let i = 0;i < cpus ;i++){
        cluster.fork();
    }
    // listening to exit event of the worker and spawing the new fork from the cluster process.
    cluster.on('exit',(worker,code)=>{
        if(code != 0 && !worker.exitedAfterDisconnect){
            console.log('Worker crashed.Starting a new Worker')
            cluster.fork();
        }
    });

    process.on('SIGUSR2',()=>{
        const workers = Object.keys(cluster.workers);
        console.log(workers);
        function restartWorker(i){

            if(i>= workers.length) return;

            const worker = workers[i]
            console.log(`Restarting the worker ${worker.process.id}.`)
            
            worker.disconnect();

            worker.on('exit',()=>{
                // If not killed by restarting return
                if(!worker.exitedAfterDisconnect) return;

                // Creating a new fork of the process
                const newWorker = cluster.fork();
                
                // restarting next worker
                newWorker.on('listening',()=>{
                    // console.log('restarting worker')
                    restartWorker(i+1);
                });
            });
        }

        restartWorker(0);
    });
}
else{
    require('./app');
}