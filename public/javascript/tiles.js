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
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "grass.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "mountain.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_l.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "dessert.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "bridge_v.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "snow.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "mountain_snow.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "bridge1.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_snow.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree_chopped.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "stone_path.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "gravel_path.png"), false));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "stone_path_pillar.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_l_b.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree_massive.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree_massive_b.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "tree_massive_l.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_t.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_l_t.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_r.png"), true));
	// this.tiles.push(new Tile(gamejs.image.load(shared.imagePath + "water_b.png"), true));
	return this;
};

Tiles.prototype.tileAt = function(i) {
	console.log(i);
	return this.tiles[i].img;
};

Tiles.prototype.canGoTo = function(i) {
	if(i === undefined) return true;

	return !this.tiles[i].blocks;
};