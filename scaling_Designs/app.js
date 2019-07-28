const http = require('http')
const pid = process.pid
const os = require('os')


console.log(os.cpus().length)
console.log(`process id : ${pid}`)
http.createServer((req,res)=>{
    for(let i = 1e7;i>0;i--){}
    console.log(`Handling request from process id ${pid}`)
    res.end(`Hello from process id ${pid}\n`)
}).listen(8080,()=>{
    console.log(`Process started ${pid}`)
});


// Simulating the server crash
setTimeout(()=>{
    throw new Error('Oops')
},Math.ceil(Math.random()*3)*10000);