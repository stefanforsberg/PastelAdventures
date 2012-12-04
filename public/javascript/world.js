var gamejs = require('gamejs');
var t = require('tiles').Tiles;
var shared = require('shared');

var gameSizeRect = new gamejs.Rect([0,0], [640, 640]);

var World = exports.World = function() {
	this.surfaces = {};
	this.users = {};

	return this;
};

World.prototype.init = function(board) {
	this.board = board;	

	var map = loadTmxMap();

	this.width = map.width;
	this.height = map.height;

	t.init();
	shared.camera.init(this.size());

	this.surfaces.tmxDisplayCache = map.tmxDisplayCache;
	this.surfaces.displayCache = map.displayCache;
	this.surfaces.displayStatic = new gamejs.Surface(640, 640);

	this.surfaces.displayStatic.blit(this.surfaces.displayCache, gameSizeRect, gameSizeRect);

	this.drawObjects();
};

World.prototype.updateStaticDisplay = function(c) {
	this.surfaces.displayStatic.fill("#FFFFFF");
	this.surfaces.displayStatic.blit(this.surfaces.displayCache, gameSizeRect, new gamejs.Rect(shared.camera.asPixelVector(), [640, 640]));

	for (var key in this.users) {
		this.users[key].update(shared.camera.position());
		this.users[key].draw(this.surfaces.displayStatic);
	}

	c.update();
	c.draw(this.surfaces.displayStatic);
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
	return (x >= 0 && x < this.width && y >= 0 && y < this.height) && t.canGoTo(this.boardAt(x, y));
};

World.prototype.drawObjects = function() {

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