var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var socket = require('socket.io');
var io = socket(server);

const port = 3000;

var users = require('./Users.json');

io.on('connection', function(socket) {
    console.log('user connected');
    
    socket.on('joinChat', (data) => {
        socket.broadcast.emit('connection', data.username + ' is joined');
    });

    socket.on('new-message', (data) => {
        //console.log(message);
        debugger;
        io.emit('new-message', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data.username +' is typing...');
    });

    socket.on('removeTyping', (data) => {
        socket.broadcast.emit('removeTyping', '');
    });
});

app.get('/', function(req, res) {
    res.send('This is Chat Server');
})

server.listen(port, ()=> {
    console.log('started on port: ', port);
})