var gamejs = require('gamejs');

var World = exports.World = function() {

	this.board = [
	[2,2,2,0,0,0,0,2,0,0,2,2,2,0,0,0,1,0,0,3],
	[0,0,0,0,0,4,4,4,0,0,0,2,0,0,0,1,1,0,3,3],
	[0,0,4,4,4,4,4,4,4,0,0,5,0,0,0,1,1,3,3,3],
	[0,0,4,0,0,0,1,0,0,0,2,2,2,0,0,0,0,0,3,3],
	[0,0,0,1,1,1,1,0,0,2,2,2,2,0,0,0,0,0,1,0],
	[0,0,0,0,1,1,1,0,0,2,2,2,2,0,0,0,0,0,1,1],
	[0,0,0,0,0,1,1,1,0,2,2,2,2,0,0,0,0,0,2,2],
	[0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2],
	[0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
	[0,0,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2]
	];

	console.log(this.board.length)

	this.tiles = [];
	this.tiles.push(gamejs.image.load("images/grass.png"));
	this.tiles.push(gamejs.image.load("images/mountain.png"));
	this.tiles.push(gamejs.image.load("images/water.png"));
	this.tiles.push(gamejs.image.load("images/dessert.png"));
	this.tiles.push(gamejs.image.load("images/tree.png"));
	this.tiles.push(gamejs.image.load("images/bridge.png"));

	return this;
};

World.prototype.size = function() {
	return [this.board[0].length, this.board.length]
}

World.prototype.boardAt = function(x, y) {
   return this.tiles[this.board[y][x]];
};

World.prototype.canGoTo = function(x, y) {
   return this.board[y][x] != 1 && this.board[y][x] != 2;
};