const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('index.html','utf8',(err,htmlContent)=> {
            if(err){
                res.statusCode = 500;
                res.end('Internal Server Error');
                return;
            }
            res.setHeader('content-Type' , 'text/html');
            res.end(htmlContent);
        });
    }
    else if (req.url === '/style.css') {
        fs.readFile('style.css','utf8',(err,cssContent)=>{
            if(err){
                res.statusCode = 500;
                res.end('Internal Server Error');
                return;
            }
            res.setHeader('Content-Type','text/css');
            res.end(cssContent);
        });
    
       
    }else {
        res.statusCode= 404;
        res.end('Not Found');
    }
});
const port = 4000;
server.listen(port,()=>{
    console.log("http://localhost:4000");
})