var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://localhost:8080';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var chatUser1 = {'name':'Tom'};
var chatUser2 = {'name':'Sally'};
var chatUser3 = {'name':'Dana'};

describe("Game Server",function(){
	it('Should only return one user when only when client is connected', function(done){
		var client1 = io.connect(socketURL, options);

		client1.on('connected', function(data){
			Object.keys(data.u).length.should.equal(1);
			client1.disconnect();
			done();
		});
	});
});