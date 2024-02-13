const fs = require('fs')


const first = fs.readFileSync('./content/test2.txt','utf-8')

console.log(first)