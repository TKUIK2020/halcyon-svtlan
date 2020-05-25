const http = require("http");
const fs = require("fs");
http.createServer(function(request, response){

     fs.readFile('index.html', function(error, data){
            if(error){
                response.statusCode = 404;
                response.end("Resourse not found!");
            }  
            else{
                response.setHeader("Content-Type", "text/html");
                response.end(data);
            }
        })
}).listen(3300);

