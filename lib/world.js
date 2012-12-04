var user = require('./user.js');

var board = {
  t22x0: 33, t23x0: 33, t24x0: 33, t25x0: 33, t26x0: 33, t27x0: 33, t28x0: 33, t29x0: 33, t30x0: 33, t31x0: 33, t32x0: 33, t33x0: 33, t34x0: 33, t35x0: 33, t36x0: 33, t37x0: 33, t38x0: 33, t39x0: 33, t40x0: 33, t41x0: 33, t42x0: 33, t43x0: 33, t44x0: 33, t45x0: 33, t46x0: 33, t47x0: 33, t48x0: 33, t49x0: 33, t50x0: 33, t51x0: 33, t52x0: 33, t53x0: 33, t54x0: 33, t55x0: 33, t56x0: 33, t57x0: 33, t58x0: 33, t59x0: 33, t60x0: 33, t61x0: 33, t62x0: 33, t63x0: 33, t64x0: 33, t65x0: 33, t66x0: 33, t67x0: 33, t68x0: 33, t69x0: 33, t70x0: 33, t71x0: 33, t72x0: 33, t73x0: 33, t22x1: 33, t23x1: 33, t24x1: 33, t25x1: 33, t26x1: 33, t27x1: 33, t28x1: 33, t29x1: 33, t30x1: 33, t31x1: 33, t32x1: 33, t33x1: 33, t34x1: 33, t35x1: 33, t36x1: 33, t37x1: 33, t38x1: 33, t39x1: 33, t40x1: 33, t41x1: 33, t42x1: 33, t43x1: 33, t44x1: 33, t45x1: 33, t46x1: 33, t47x1: 33, t48x1: 33, t49x1: 33, t50x1: 33, t51x1: 33, t52x1: 33, t53x1: 33, t54x1: 33, t55x1: 33, t56x1: 33, t57x1: 33, t58x1: 33, t59x1: 33, t60x1: 33, t61x1: 33, t62x1: 33, t63x1: 33, t64x1: 33, t65x1: 33, t66x1: 33, t67x1: 33, t68x1: 33, t69x1: 33, t70x1: 33, t71x1: 33, t72x1: 33, t73x1: 33, t24x2: 33, t25x2: 33, t26x2: 33, t27x2: 33, t28x2: 33, t29x2: 33, t30x2: 33, t31x2: 33, t32x2: 33, t33x2: 33, t34x2: 33, t35x2: 33, t36x2: 33, t37x2: 33, t38x2: 33, t39x2: 33, t40x2: 33, t41x2: 33, t42x2: 33, t43x2: 33, t44x2: 33, t45x2: 33, t46x2: 33, t47x2: 33, t48x2: 33, t49x2: 33, t50x2: 33, t51x2: 33, t52x2: 33, t53x2: 33, t54x2: 33, t55x2: 33, t56x2: 33, t57x2: 33, t58x2: 33, t59x2: 33, t60x2: 33, t61x2: 33, t62x2: 33, t63x2: 33, t64x2: 33, t65x2: 33, t66x2: 33, t67x2: 33, t68x2: 33, t69x2: 33, t70x2: 33, t71x2: 33, t72x2: 33, t73x2: 33, t27x3: 33, t28x3: 33, t29x3: 33, t30x3: 33, t31x3: 33, t32x3: 33, t33x3: 33, t34x3: 33, t35x3: 33, t36x3: 33, t37x3: 33, t38x3: 33, t39x3: 33, t40x3: 33, t41x3: 33, t42x3: 33, t43x3: 33, t44x3: 33, t45x3: 33, t46x3: 33, t47x3: 33, t48x3: 33, t49x3: 33, t50x3: 33, t51x3: 33, t52x3: 33, t53x3: 33, t54x3: 33, t55x3: 33, t56x3: 33, t57x3: 33, t58x3: 33, t59x3: 33, t60x3: 33, t61x3: 33, t62x3: 33, t63x3: 33, t64x3: 33, t65x3: 33, t66x3: 33, t67x3: 33, t68x3: 33, t69x3: 33, t70x3: 33, t71x3: 33, t72x3: 33, t29x4: 33, t30x4: 33, t31x4: 33, t32x4: 33, t33x4: 33, t34x4: 33, t35x4: 33, t36x4: 33, t37x4: 33, t38x4: 33, t39x4: 33, t40x4: 33, t41x4: 33, t42x4: 33, t43x4: 33, t44x4: 33, t45x4: 33, t46x4: 33, t47x4: 33, t48x4: 33, t49x4: 33, t50x4: 33, t51x4: 33, t52x4: 33, t53x4: 33, t54x4: 33, t55x4: 33, t56x4: 33, t57x4: 33, t58x4: 33, t59x4: 33, t60x4: 33, t61x4: 33, t62x4: 33, t63x4: 33, t64x4: 33, t65x4: 33, t66x4: 33, t67x4: 33, t68x4: 33, t69x4: 33, t70x4: 33, t71x4: 33, t72x4: 33, t30x5: 33, t31x5: 33, t32x5: 33, t33x5: 33, t34x5: 33, t35x5: 33, t36x5: 33, t37x5: 33, t38x5: 33, t39x5: 33, t40x5: 33, t41x5: 33, t42x5: 33, t43x5: 33, t44x5: 33, t45x5: 33, t46x5: 33, t47x5: 33, t48x5: 33, t49x5: 33, t50x5: 33, t51x5: 33, t52x5: 33, t53x5: 33, t54x5: 33, t55x5: 33, t56x5: 33, t57x5: 33, t58x5: 33, t59x5: 33, t60x5: 33, t61x5: 33, t62x5: 33, t63x5: 33, t64x5: 33, t65x5: 33, t66x5: 33, t67x5: 33, t68x5: 33, t69x5: 33, t70x5: 33, t71x5: 33, t52x6: 33, t53x6: 33, t54x6: 33, t55x6: 33, t56x6: 33, t57x6: 33, t58x6: 33, t59x6: 33, t60x6: 33, t61x6: 33, t62x6: 33, t63x6: 33, t64x6: 33, t65x6: 33, t66x6: 33, t67x6: 33, t68x6: 33, t69x6: 33, t70x6: 33, t14x7: 3, t15x7: 4, t53x7: 33, t54x7: 33, t55x7: 33, t56x7: 33, t57x7: 33, t58x7: 33, t59x7: 33, t60x7: 33, t61x7: 33, t62x7: 33, t63x7: 33, t64x7: 33, t65x7: 33, t66x7: 33, t67x7: 33, t68x7: 33, t69x7: 33, t70x7: 33, t14x8: 4, t15x8: 4, t55x8: 33, t56x8: 33, t57x8: 33, t58x8: 33, t59x8: 33, t60x8: 33, t61x8: 33, t62x8: 33, t63x8: 33, t64x8: 33, t65x8: 33, t66x8: 33, t67x8: 33, t68x8: 33, t69x8: 33, t55x9: 33, t56x9: 33, t57x9: 33, t58x9: 33, t59x9: 33, t60x9: 33, t61x9: 33, t62x9: 33, t63x9: 33, t64x9: 33, t65x9: 33, t66x9: 33, t67x9: 33, t68x9: 33, t62x10: 33, t63x10: 33, t64x10: 33, t65x10: 33, t66x10: 33, t67x10: 33, t68x10: 33, t37x12: 4, t38x12: 4, t39x12: 4, t40x12: 4, t41x12: 4, t33x13: 4, t34x13: 4, t35x13: 4, t36x13: 4, t42x13: 4, t43x13: 4, t44x13: 4, t32x14: 4, t45x14: 4, t46x14: 4, t47x14: 4, t30x15: 4, t31x15: 4, t48x15: 4, t49x15: 4, t50x15: 4, t29x16: 4, t51x16: 4, t52x16: 4, t53x16: 4, t28x17: 4, t54x17: 4, t27x18: 4, t55x18: 4, t56x18: 4, t27x19: 4, t57x19: 4, t28x20: 4, t58x20: 4, t59x20: 4, t28x21: 4, t60x21: 4, t61x21: 4, t29x22: 4, t61x22: 4, t30x23: 4, t31x23: 4, t32x23: 4, t33x23: 4, t34x23: 4, t35x23: 4, t62x23: 4, t36x24: 4, t37x24: 4, t38x24: 4, t62x24: 4, t38x25: 4, t62x25: 4, t39x26: 4, t40x26: 4, t62x26: 4, t41x27: 4, t42x27: 4, t43x27: 4, t44x27: 4, t45x27: 4, t46x27: 4, t47x27: 4, t48x27: 4, t49x27: 4, t61x27: 4, t50x28: 4, t51x28: 4, t60x28: 4, t61x28: 4, t52x29: 4, t53x29: 4, t59x29: 4, t60x29: 4, t53x30: 4, t54x30: 4, t55x30: 4, t56x30: 4, t57x30: 4, t58x30: 4
};

var Tile = function(id, blocks) {
	this.id = id;
	this.blocks = blocks;
}

exports.World = function (io) {

	var world = {
		
		users: {},

		tiles: {
			mountain: new Tile(3, true),
			tree: new Tile(4, true),
			treeChopped: new Tile(5, true),
			water: new Tile(33, true),
			bridge: new Tile(34, false)
		},

		board: function() {
			return board;
		},

		boardAt: function(x,y) {
			return board["t" + x + "x" + y];
		},

		canGoTo: function(x,y) {
			var tileId = this.boardAt(x,y);
			var tileToCheck;
			
			if(tileId === undefined) return true;

			for(var key in world.tiles) {
				var tile = world.tiles[key];
				if(tile.id === tileId) {
					tileToCheck = tile;
					break;
				}
			}

			return !tileToCheck.blocks;
		},

		setBoardAt: function(x,y,v) {
			board["t" + x + "x" + y] = v;
		},

		action: function(x, y, user) {
			// Chop tree
			if(this.boardAt(x,y) === world.tiles.tree.id) {
				this.setBoardAt(x,y,world.tiles.treeChopped.id);
				return { a: true, type: world.tiles.treeChopped.id };
			}

			// Build bridge
			if(this.boardAt(x,y) === world.tiles.water.id) {
				if(user.canBuildBridge()) {	
					this.setBoardAt(x,y,world.tiles.bridge.id);
					return { a: true, type: world.tiles.bridge.id };
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

				
				var user = world.users[socket.id];
				var newPos = [user.pos[0],user.pos[1]];

				switch(data.d) {
					case "d": 
						newPos[1]++;
						user.si = 0;
						break;
					case "u": 
						newPos[1]--;
						user.si = 1;
						break;
					case "r": 
						newPos[0]++;
						user.si = 2;
						break;
					case "l": 
						newPos[0]--;
						user.si = 3;
						break;
				}

				if(world.canGoTo(newPos[0], newPos[1])) {
					world.users[socket.id].move(newPos);
				};

				socket.emit('cm', {u: world.users[socket.id]});
				socket.broadcast.emit('ocu', {u: world.users[socket.id]});
			},

			action: function(socket) {

				var user = world.users[socket.id];
				var pos = user.pointingPos();
				var actionResult = world.action(pos[0], pos[1], user);

				if(actionResult.a && actionResult.type === world.tiles.treeChopped.id) {  
					user.increaseWoodAmount();
					socket.emit('wood', {u: user});
					io.sockets.emit('worldChanged', {x: pos[0], y: pos[1], v: world.tiles.treeChopped.id});

					setTimeout(function() { 
						if(world.noneUserAction(pos[0], pos[1])) {
							io.sockets.emit('worldChanged', {x: pos[0], y: pos[1], v: world.tiles.tree.id});
						}
					}, 5000); 
				}

				if(actionResult.a && actionResult.type === world.tiles.bridge.id) {
					user.buildBridge();
					socket.emit('wood', {u: user});
					io.sockets.emit('worldChanged', {x: pos[0], y: pos[1], v: world.tiles.bridge.id});
				}  
			},
		},
	};

	io.sockets.on('connection', function (socket) {

		world.Events.connected(socket);

		socket.on('disconnect', function () {
			world.Events.disconnected(socket);
		});

		socket.on('a', function (pos) {
			world.Events.action(socket);
		});

		socket.on('cu', function (data) {
			world.Events.moved(socket, data);
		});

		socket.on('cm', function (data) {
			world.Events.moved(socket, data);
		});
	});
};