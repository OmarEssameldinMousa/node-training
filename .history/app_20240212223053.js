const fs = require('fs')


const first = fs.readFileSync('./content/test2.txt','utf-8')

fs.writeFileSync('./content/subfolder/test.txt',`This is text from test2:
${first}
`)