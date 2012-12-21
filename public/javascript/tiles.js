var gamejs = require('gamejs');
var shared = require('shared');

var Tiles = exports.Tiles = {

	tiles: {},

	init: function() {
		this.tiles[1] = new Tile(true);
		this.tiles[4] = new Tile(true, "tree.png");
		this.tiles[5] = new Tile(true, "tree_chopped.png");
		this.tiles[33] = new Tile(true);
		this.tiles[34] = new Tile(false, 'bridge_v.png');
	},

	tileAt: function(i) {
		return this.tiles[i].img;
	},

	canGoTo: function(i) {
		if(i === undefined) return true;

		return !this.tiles[i].blocks;
	}
};

function Tile(blocks, img) {
	if(img) {
		this.img = gamejs.image.load(shared.imagePath + img);
	}

	this.blocks = blocks;
};



