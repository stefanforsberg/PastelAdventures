var util = require('util');
var io = require('socket.io');
var http = require('http');
var world = require('./public/javascript/world');
var express = require('express');
var count = 0;
var users = {};

var app = express();
var server = http.createServer(app);

app.configure(function(){
    app.use(express.static(__dirname));
});

var user = function(id) {
    this.id = id;
    this.pos = [0,0];
    this.si = 0;
    return this;
};

io = io.listen(server);
server.listen(8080);

io.sockets.on('connection', function (socket) {
  
    users[socket.id] = new user(socket.id);

    socket.emit('connected', {u: users});

    socket.on('disconnect', function () {
        delete users[socket.id];
    });

    socket.on('cu', function (data) {
        users[socket.id].pos = data.p;
        users[socket.id].si = data.si;
        
        socket.broadcast.emit('ocu', {u: users[socket.id]});
    });
});