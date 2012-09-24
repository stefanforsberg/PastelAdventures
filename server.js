var io = require('socket.io');
var http = require('http');
var express = require('express');
var user = require('./lib/user.js')
var users = {};

var app = express();
var server = http.createServer(app);

app.use(express.cookieParser('keyboard cat'));
app.use(express.session());
app.use(express.bodyParser());

// app.get('/game.html', function (req, res, next) {
//     if (!req.session.user_id) {
//         res.redirect('/index.html');
//     } else {
//         next();
//     }
// });

app.post('/index.html', function (req, res) {
  var post = req.body;

  if (post.user.name == 'john' && post.user.password == 'johnspassword') {
    req.session.user_id = "12345";
    res.redirect('/game.html');
  } else {
    res.redirect('/index.html');
  }
});

app.use(express.static(__dirname + "/public"));

io = io.listen(server);
server.listen(8080);

io.sockets.on('connection', function (socket) {
    
    users[socket.id] = new user(socket.id);

    socket.emit('connected', {u: users});
    socket.broadcast.emit('otherConnected', {u: users[socket.id]});

    socket.on('disconnect', function () {
        delete users[socket.id];
        socket.broadcast.emit('disconnected', {id: socket.id});
    });

    socket.on('cu', function (data) {
        users[socket.id].pos = data.p;
        users[socket.id].si = data.si;
        
        socket.broadcast.emit('ocu', {u: users[socket.id]});
    });
});