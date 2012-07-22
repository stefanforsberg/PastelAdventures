var gamejs = require('gamejs');

var Char = exports.Char = function(rect, id) {
   Char.superConstructor.apply(this, arguments);

   //this.originalImage = gamejs.image.load("images/gubbe.png");

   this.spriteIndex = 0;

   this.sprites = 
   [
      gamejs.image.load("public/images/char0.png"),
      gamejs.image.load("public/images/char1.png"),
      gamejs.image.load("public/images/char0.png"),
      gamejs.image.load("public/images/char2.png")
   ];

   this.rotation = 90;
   this.image = gamejs.transform.rotate(this.sprites[0], this.rotation);
   this.rect = new gamejs.Rect(rect);
   return this;
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);

Char.prototype.animation = function() {
   this.spriteIndex++;
   if(this.spriteIndex >= this.sprites.length) this.spriteIndex = 0;
};

Char.prototype.moveUp = function() {
   this.rect.moveIp(0,-64);
   this.rotation = 0;
   this.animation();
};

Char.prototype.moveDown = function() {
   this.rect.moveIp(0,64);
   this.rotation = 180;
   this.animation();
};

Char.prototype.moveRight = function() {
   this.rect.moveIp(64, 0);
   this.rotation = 90;
   this.animation();
};

Char.prototype.moveLeft = function() {
   this.rect.moveIp(-64, 0);
   this.rotation = 270;
   this.animation();
};

Char.prototype.move = function(x, y) {
	this.rect.moveIp(x, y);
};

Char.prototype.update = function() {
   this.image = gamejs.transform.rotate(this.sprites[this.spriteIndex], this.rotation);
};

Char.prototype.pos = function() {
   return [this.rect.left / 64, this.rect.top / 64];
};


