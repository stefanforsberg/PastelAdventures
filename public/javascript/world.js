var World = exports.World = function(board) {
	this.board = board;
	return this;
};

World.prototype.setBoard = function(board) {
	this.board = board;
};

World.prototype.size = function() {
	return [this.board[0].length, this.board.length];
};

World.prototype.width = function() {
	return this.board[0].length;
};

World.prototype.height = function() {
	return this.board.length;
};

World.prototype.boardAt = function(x, y) {
	return this.board[y][x];
};

World.prototype.canGoTo = function(x, y) {
	return (typeof this.board[y] !== "undefined" && typeof this.board[y][x] !== "undefined");
};