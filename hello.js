var http=require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('hello world');
    console.log("1233");
}).listen(1234);
console.log("server is running at port")