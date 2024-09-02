const http= require ("http")
const fs= require ("fs")
const url= require ("url")

http.createServer((req,res)=>{
    // console.log(req.url);
    const newUrl= url.parse(req.url)
    console.log(newUrl);
    if(newUrl.pathname=="/"){
        fs.readFile("./pages/index.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-type":"text/html"});
                return res.end("Page Not Found")

            }
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(data)
            res.end()
        });
      
    }
    else if(newUrl.pathname=="/contact"){
        fs.readFile("./pages/contact.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-type":"text/html"});
                return res.end("Page Not Found")

            }
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(data)
            res.end()
        });
        
    }
    else{
        fs.readFile("./pages/error.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-type":"text/html"});
                return res.end("Page Not Found")

            }
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(data)
            res.end()
        });
        
    }
    
}).listen(3000)