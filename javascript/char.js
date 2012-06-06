var gamejs = require('gamejs');

var Char = exports.Char = function(rect) {
   Char.superConstructor.apply(this, arguments);

   this.originalImage = gamejs.image.load("images/gubbe.png");

   this.rotation = 90;
   this.image = gamejs.transform.rotate(this.originalImage, this.rotation);
   this.rect = new gamejs.Rect(rect);
   return this;
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);

Char.prototype.moveUp = function() {
   this.rect.moveIp(0,-64);
   this.rotation = 0;
};

Char.prototype.moveDown = function() {
   this.rect.moveIp(0,64);
   this.rotation = 180;
};

Char.prototype.moveRight = function() {
   this.rect.moveIp(64, 0);
   this.rotation = 90;
};

Char.prototype.moveLeft = function() {
   this.rect.moveIp(-64, 0);
   this.rotation = 270;
};

Char.prototype.move = function(x, y) {
	this.rect.moveIp(x, y);
};

Char.prototype.pos = function() {
   return [this.rect.left / 64, this.rect.top / 64];
};

