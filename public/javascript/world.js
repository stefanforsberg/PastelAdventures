var gamejs = require('gamejs');
var tiles = require('tiles').Tiles;
var shared = require('shared');

var World = exports.World = function(board) {
	this.board = board;

	this.surfaces = {};
	
	var map = loadTmxMap();

	this.width = map.width;
	this.height = map.height;
	this.surfaces.tmxDisplayCache = map.tmxDisplayCache;
	this.surfaces.displayCache = map.displayCache;
	this.surfaces.displayStatic = new gamejs.Surface(640, 640);

	return this;
};

World.prototype.size = function() {
	return [this.width, this.height];
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

World.prototype.drawObjects = function() {

	var t = new tiles();

	this.surfaces.displayCache.blit(this.surfaces.tmxDisplayCache);

	for (var x=0;x<this.width;x++) {
		for (var y=0; y<this.height; y++) {
			if(this.boardAt(x, y) !== undefined) {
				var tile = t.tiles[this.boardAt(x, y)]; 
				if(tile) {
					if(tile.img) this.surfaces.displayCache.blit(tile.img, [x*shared.tileSize, y*shared.tileSize]);
				}
				else {
					gamejs.log('no tile ', this.boardAt(x, y));  
				}
			}
		}
	}
};

function loadTmxMap() {
   var map = new gamejs.tmx.Map('images/map.tmx');

   var tmxDisplayCache = new gamejs.Surface(map.width * map.tileWidth, map.height * map.tileHeight);
   var displayCache = new gamejs.Surface(map.width * map.tileWidth, map.height * map.tileHeight);

   for(var layer = 0; layer < 3; layer++) {
      var maplayer = map.layers[layer];

      maplayer.gids.forEach(function(row, i) {
         row.forEach(function(gid, j) {
            if (gid ===0) return;

            var tileSurface = map.tiles.getSurface(gid);
            if (tileSurface) {
               tmxDisplayCache.blit(tileSurface, new gamejs.Rect([j * map.tileWidth, i * map.tileHeight], [map.tileWidth, map.tileHeight])
               );
            } 
            else {
               gamejs.log('no gid ', gid, i, j, 'layer', i);
            }
         }, this);
      }, this);
   }

   return { 
		width: map.width, 
		height: map.height,
		tmxDisplayCache: tmxDisplayCache,
		displayCache: displayCache
   };
}