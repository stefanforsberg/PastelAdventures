var gamejs = require('gamejs');
var shared = require('shared');

var Char = exports.Char = function(rect, id) {
   Char.superConstructor.apply(this, arguments);

   this.spriteIndex = 0;

   this.sprites = 
   [
      gamejs.image.load("public/images/char_d.png"),
      gamejs.image.load("public/images/char_u.png"),
      gamejs.image.load("public/images/char_r.png"),
      gamejs.image.load("public/images/char_l.png")
   ];

   this.image = this.sprites[this.spriteIndex];
   this.rect = new gamejs.Rect(rect);
   return this;
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);

Char.prototype.moveUp = function() {
   this.rect.moveIp(0,-shared.tileSize);
   this.spriteIndex = 1;
};

Char.prototype.moveDown = function() {
   this.rect.moveIp(0,shared.tileSize);
   this.spriteIndex = 0;
};

Char.prototype.moveRight = function() {
   this.rect.moveIp(shared.tileSize, 0);
   this.spriteIndex = 2;
};

Char.prototype.moveLeft = function() {
   this.rect.moveIp(-shared.tileSize, 0);
   this.spriteIndex = 3;
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


