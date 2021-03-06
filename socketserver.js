var http = require('http');
var fs = require('fs');

// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
    socket.emit('message', 'You are connected!');

});

 io.sockets.on('message', function (message) {
        console.log('A client is speaking to me! They’re saying: ' + message);
    });
var portC = process.env.PORT || 3000;
console.log("I am gonna start in port "+portC);
server.listen(portC);
