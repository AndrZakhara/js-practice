var express = require('express');
var app = express();

// var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var users = [];
// var connections = [];


app.use(express.static("public"));
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');

// });

// app.get('/style.css', function(req, res) {
//     res.sendFile(__dirname + '/styles.css');
// });


io.on('connection', function(socket) {
    console.log('user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });

    socket.on('disconnect', function() {
        console.log('user disconnected')
    });
});

server.listen(3000, function() {
    console.log('Server started on: http://localhost:3000')
});