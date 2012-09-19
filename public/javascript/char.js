var gamejs = require('gamejs');
var shared = require('shared');

var Char = exports.Char = function(rect) {
   Char.superConstructor.apply(this, arguments);

   this.spriteIndex = 0;

   this.sprites = 
   [
      gamejs.image.load(shared.imagePath + "char_d.png"),
      gamejs.image.load(shared.imagePath + "char_u.png"),
      gamejs.image.load(shared.imagePath + "char_r.png"),
      gamejs.image.load(shared.imagePath + "char_l.png")
   ];

   this.image = this.sprites[this.spriteIndex];
   this.rect = new gamejs.Rect(rect);
   return this;
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);

Char.prototype.turnUp = function() {
   this.spriteIndex = 1;
};

Char.prototype.moveUp = function() {
   this.rect.moveIp(0,-shared.tileSize);
};

Char.prototype.turnDown = function() {
   this.spriteIndex = 0;
};

Char.prototype.moveDown = function() {
   this.rect.moveIp(0,shared.tileSize);
};

Char.prototype.turnRight = function() {
   this.spriteIndex = 2;
};

Char.prototype.moveRight = function() {
   this.rect.moveIp(shared.tileSize, 0);
};

Char.prototype.turnLeft = function() {
   this.spriteIndex = 3;
};

Char.prototype.moveLeft = function() {
   this.rect.moveIp(-shared.tileSize, 0);
};

Char.prototype.move = function(x, y) {
	this.rect.moveIp(x, y);
};

Char.prototype.update = function() {
   this.image = this.sprites[this.spriteIndex];
};

Char.prototype.pos = function() {
   return [this.rect.left / shared.tileSize, this.rect.top / shared.tileSize];
};


