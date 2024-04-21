var http=require('http');
var fileS=require('fs');
http.createServer(function (req,res) {
    fileS.readFile('index.html',function(err,data){
        if(err){
            console.log(err);
            res.writeHead(404,'Not Found'+err);
            return res.end("Error 404: Page not found");
        }
        else{
            res.writeHead(200,{'content-type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}).listen(12345);