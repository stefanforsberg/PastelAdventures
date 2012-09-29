var gamejs = require('gamejs');
var shared = require('shared');

var Tiles = exports.Tiles = function() {

	var Tile = function(img, blocks) {
		this.img = img;
		this.blocks = blocks;
	};

	this.tiles = [];

	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "grass.png"), false));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "mountain.png"), true));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water.png"), true));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_l.png"), true));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "dessert.png"), false));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree.png"), true));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "bridge.png"), false));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "snow.png"), false));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "mountain_snow.png"), true));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "bridge1.png"), false));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_snow.png"), true));
	this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree_chopped.png"), true));
	return this;

};

Tiles.prototype.tileAt = function(i) {
	return this.tiles[i].img;
};

Tiles.prototype.canGoTo = function(i) {
	return !this.tiles[i].blocks;
};