var gamejs = require('gamejs');

var Tiles = exports.Tiles = function() {

	var Tile = function(img, blocks) {
		this.img = img;
		this.blocks = blocks;
	}

	this.tiles = [];

	this.tiles.push(new Tile(gamejs.image.load("public/images/grass.png"), false));
	this.tiles.push(new Tile(gamejs.image.load("public/images/mountain.png"), true));
	this.tiles.push(new Tile(gamejs.image.load("public/images/water.png"), true));
	this.tiles.push(new Tile(gamejs.image.load("public/images/water_l.png"), true));
	this.tiles.push(new Tile(gamejs.image.load("public/images/dessert.png"), false));
	this.tiles.push(new Tile(gamejs.image.load("public/images/tree.png"), true));
	this.tiles.push(new Tile(gamejs.image.load("public/images/bridge.png"), false));
	this.tiles.push(new Tile(gamejs.image.load("public/images/snow.png"), false));
	this.tiles.push(new Tile(gamejs.image.load("public/images/mountain_snow.png"), true));
	this.tiles.push(new Tile(gamejs.image.load("public/images/bridge1.png"), false));
	this.tiles.push(new Tile(gamejs.image.load("public/images/water_snow.png"), true));

 	return this;

};

Tiles.prototype.tileAt = function(i) {
	return this.tiles[i].img;
};

Tiles.prototype.canGoTo = function(i) {
	return !this.tiles[i].blocks;
};