const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short story')
    }
    res.end(`
    <h1>oops!</h>
    <p>something wrong happend</p>
    `)
})

server.listen(5000)