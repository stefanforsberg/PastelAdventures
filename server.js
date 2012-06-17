var sys = require('sys');
var io = require('socket.io');
var static = require('node-static');
var count = 0;
var users = [];

var file = new(static.Server)('.', { cache: 7200, headers: {'X-Hello':'World!'} });

var app = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response, function (err, res) {
            if (err) { // An error as occured
                sys.error("> Error serving " + request.url + " - " + err.message);
                response.writeHead(err.status, err.headers);
                response.end();
            } else { // The file was served successfully
                sys.puts("> " + request.url + " - " + res.message);
            }
        });
    });
});

var user = function(id) {
    this.id = id;

    return this;
};

io = io.listen(app);
app.listen(8080);

io.sockets.on('connection', function (socket) {
  
    // users.push(new user(socket.id));

    // console.log("helllo: " + users.length);

    // // socket.emit('news', { hello: count });
    // socket.on('my other event', function (data) {
    // // console.log(data);
  // });
});

sys.puts("> node-static is listening on http://127.0.0.1:8080");