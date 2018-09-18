var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var users = [];
// var connections = [];



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    // connections.push(socket);
    console.log('user connected');
    //Disconnect
    socket.on('disconnect', function() {
            console.log('user disconnected')
        })
        // connections.splice(connections.indexOf(socket), 1);
        // console.log('Disconnected: %s sockets connected');
})

server.listen(3000, function() {
    console.log('Server started on: http://localhost:3000')
});