var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://localhost:8080';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

describe("Game Server",function(){
	it('Should only return one user when only when client is connected', function(done){
		var client1 = io.connect(socketURL, options);

		client1.on('connected', function(data){
			Object.keys(data.u).length.should.equal(1);
			client1.disconnect();
			done();
		});
	});

	it('Should return two users when two clients are connected', function(done){
		var client1 = io.connect(socketURL, options);

		client1.on('connected', function(data){
			Object.keys(data.u).length.should.equal(1);
			
			var client2 = client2 = io.connect(socketURL, options);

			client2.on('connected', function(data){
				Object.keys(data.u).length.should.equal(2);
				client1.disconnect();
				client2.disconnect();
			done();
		});
		});


	});
});