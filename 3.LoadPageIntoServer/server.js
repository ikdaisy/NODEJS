const http = require ("http")
const fs = require("fs")

http.createServer((req,res)=>{
    fs.readFile("index.html",(error,data)=>{
        res.write(data);
        res.end();
    })
}).listen(3000)