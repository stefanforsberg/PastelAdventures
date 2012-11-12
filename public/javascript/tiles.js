var gamejs = require('gamejs');
var shared = require('shared');

var Tiles = exports.Tiles = function() {

	var Tile = function(img, blocks) {
		this.img = img;
		this.blocks = blocks;
	};

	this.tiles = {};

	this.tiles[3] = new Tile(gamejs.image.load(shared.imagePath + "mountain.png"), true);
	this.tiles[4] = new Tile(gamejs.image.load(shared.imagePath + "tree.png"), true);
	this.tiles[5] = new Tile(gamejs.image.load(shared.imagePath + "tree_chopped.png"), true);
	return this;
};

Tiles.prototype.tileAt = function(i) {
	return this.tiles[i].img;
};

Tiles.prototype.canGoTo = function(i) {
	if(i === undefined) return true;

	return !this.tiles[i].blocks;
};