var World = exports.World = function() {

	this.board = [
	[6,6,6,6,6,6,6,6,7,7,7,7,7,6,6,6,7,7,6,6],
	[6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,6,6,6,6],
	[6,6,6,6,6,6,6,6,9,9,6,6,6,7,6,6,6,6,6,6],
	[6,6,6,6,9,9,9,9,9,6,9,9,9,6,6,6,6,6,6,6],
	[6,6,6,6,6,6,6,6,6,6,9,9,9,6,6,6,6,6,6,6],
	[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
	[0,0,0,0,0,1,1,1,0,2,2,2,2,0,0,0,0,0,2,2],
	[0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2],
	[0,0,0,2,8,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
	[0,0,2,2,8,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2],
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
	
	// this.tiles = [];

	// this.tiles.push(new Tile(gamejs.image.load("public/images/grass.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/mountain.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/water.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/dessert.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/tree.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/bridge.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/snow.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/mountain_snow.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/bridge1.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load("public/images/water_snow.png"), true));

 	return this;
};

World.prototype.size = function() {
	return [this.board[0].length, this.board.length]
}

World.prototype.width = function() {
	return this.board[0].length
};

World.prototype.height = function() {
	return this.board.length
};

World.prototype.boardAt = function(x, y) {
	return this.board[y][x];
	//return this.tiles[this.board[y][x]].img;
};

World.prototype.canGoTo = function(x, y) {
	return (typeof this.board[y][x] !== "undefined");
};