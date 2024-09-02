const http = require("http")

http.createServer((request,response)=>{
    console.log("Server started");
    console.log("Server hehe");

    response.end("Hello Everyone!!")
    

}).listen(3001)