var util = require('util');
var io = require('socket.io');
var http = require('http');
var world = require('./public/javascript/world');
var express = require('express');
var count = 0;
var users = [];

var app = express();
var server = http.createServer(app);

app.configure(function(){
    app.use(express.static(__dirname));
});

var user = function(id) {
    this.id = id;

    return this;
};


io = io.listen(server);
server.listen(8080);

io.sockets.on('connection', function (socket) {
  
    // users.push(new user(socket.id));

    // console.log("helllo: " + users.length);

    // // socket.emit('news', { hello: count });
    socket.on('move', function (data) {
        console.log(data);
    });
});

util.puts("> node-static is listening on http://127.0.0.1:8080");