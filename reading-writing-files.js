let http  = require('http')
let read  = require('fs')

http.createServer(function (request, response) {
    if (request.url == '/') {
        read.readFile("test.txt", 'utf-8', function (error, data) {
            data = parseInt(data) + 1
            read.writeFile("test.txt", data.toString(), function(error){
                if(error){
                    return console.log(err);    
                }
            })
            response.end('This page was refreshed ' + data + ' times!');
        })
    }
}).listen(8080)
