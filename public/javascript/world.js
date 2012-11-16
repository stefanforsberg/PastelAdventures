var World = exports.World = function(board) {
	this.board = board;
	this.width = 0;
	this.height = 0;
	return this;

};

World.prototype.setBoard = function(board) {
	this.board = board;

};

World.prototype.size = function() {
	return [this.width, this.height];
};

World.prototype.width = function() {
	return this.board[0].length;
};

World.prototype.height = function() {
	return this.board.length;
};

World.prototype.setBoardAt = function(x, y, v) {
	this.board["t" + x + "x" + y] = v;
};

World.prototype.boardAt = function(x, y) {
	return this.board["t" + x + "x" + y];
};

World.prototype.canGoTo = function(x, y) {
	return (x >= 0 && x < this.width && y >= 0 && y < this.height);
};