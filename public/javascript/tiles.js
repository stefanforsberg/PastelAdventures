var gamejs = require('gamejs');
var shared = require('shared');

var Tiles = exports.Tiles = function() {

	var Tile = function(blocks, img) {
		if(img) {
			this.img = gamejs.image.load(shared.imagePath + img);
		}

		this.blocks = blocks;
	};

	this.tiles = {};

	this.tiles[3] = new Tile(true, "mountain.png");
	this.tiles[4] = new Tile(true, "tree.png");
	this.tiles[5] = new Tile(true, "tree_chopped.png");
	this.tiles[33] = new Tile(true);
	this.tiles[34] = new Tile(false, 'bridge_v.png');
	return this;
};

Tiles.prototype.tileAt = function(i) {
	return this.tiles[i].img;
};

Tiles.prototype.canGoTo = function(i) {
	if(i === undefined) return true;

	return !this.tiles[i].blocks;
};