const { error } = require('console');
const fs = require('fs');

fs.readFile('./content/test2.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    fs.writeFile('./content/subfolder/test.txt',
    `Here is the resutl that will be written in text: ${result}`
    ,(error,result)=>{
        if(error){
            console.log(error);
        }
        console.log(result)
    })
})