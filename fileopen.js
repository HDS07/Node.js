var http = require('http');
var  fileS = require("fs");
http.createServer(function (req, res){
    fileS.open('fileopen.html','w',function(err,file){
        if(err){
            console.log('error opening the file');
        }
        else{
            console.log('fs->open successfull');
        }
    });
}).listen(1234);