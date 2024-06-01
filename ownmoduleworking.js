var http=require('http');
var dateT=require('./ownmodule');

http.createServer(function (req,res) {
    res.writeHead(200,{'content-type': 'text/html'});
    res.write("current date and time are:"+ dateT.dateTime());
    res.end('<p>hello world</p>');
}).listen(1234);
