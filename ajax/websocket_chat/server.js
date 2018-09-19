const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static("public"));

io.on('connection', function(socket) {
    console.log('user connected');

    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function() {
        console.log('user disconnected')
    });
});

server.listen(3000, function() {
    console.log('Server started on: http://localhost:3000')
});