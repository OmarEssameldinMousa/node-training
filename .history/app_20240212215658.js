const os = require('os')
console.log(`The system uptime is ${os.uptime()} seconds `)

const currentos = {
    name: os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentos)