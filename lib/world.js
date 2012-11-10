var user = require('./user.js');

var board = {
  t14x7: 3, t15x7: 4, t14x8: 4, t15x8: 4
};

var world = exports.World = {
	
	users: {},

	board: function() {
		return board;
	},

	boardAt: function(x,y) {
		return board["t" + x + "x" + y]
	},

	setBoardAt: function(x,y,v) {
		board["t" + x + "x" + y] = v;
	},

	action: function(x, y, user) {
		// Chop tree
		if(this.boardAt(x,y) === 4) {
			this.setBoardAt(x,y,5);
			return { a: true, type: "wood" };
		}

		// Build bridge
		if(this.boardAt(x,y) === 2) {
			if(user.canBuildBridge()) {	
				this.setBoardAt(x,y,6);
				return { a: true, type: "bridge" };
			}
		}

		return { a: false };
	},

	noneUserAction: function(x, y) {
		if(this.boardAt(x,y) === 5) {
			this.setBoardAt(x,y,4);
			return true;
		}
	},

	Events: {
		connected: function(socket) {
		    world.users[socket.id] = new user(socket.id);
		    socket.emit('connected', {u: world.users, b: world.board()});
		    socket.broadcast.emit('otherConnected', {u: world.users[socket.id]});
		},

		disconnected: function(socket) {
			delete world.users[socket.id];
	        socket.broadcast.emit('disconnected', {id: socket.id});
		},

		moved: function(socket, data) {
			world.users[socket.id].pos = data.p;
        	world.users[socket.id].si = data.si;
        	socket.broadcast.emit('ocu', {u: world.users[socket.id]});
		},

		action: function(socket, pos) {

	      	var user = world.users[socket.id];

			var actionResult = world.action(pos[0], pos[1], user);

			if(actionResult.a && actionResult.type === "wood") {  
				user.increaseWoodAmount();
				socket.emit('wood', {u: user});
				socket.emit('worldChanged', {x: pos[0], y: pos[1], v: 5});
				socket.broadcast.emit('worldChanged', {x: pos[0], y: pos[1], v: 5});

				setTimeout(function() { 
				  if(world.noneUserAction(pos[0], pos[1])) {
				    socket.emit('worldChanged', {x: pos[0], y: pos[1], v: 4});
				    socket.broadcast.emit('worldChanged', {x: pos[0], y: pos[1], v: 4});
				  }
				}, 5000); 
			}

			if(actionResult.a && actionResult.type === "bridge") {
				user.buildBridge();

				socket.emit('wood', {u: user});
				socket.emit('worldChanged', {b: world.board()});
				socket.broadcast.emit('worldChanged', {b: world.board()});
			}  
		},
	},
};