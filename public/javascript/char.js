var gamejs = require('gamejs');

var Char = exports.Char = function(rect, id) {
   Char.superConstructor.apply(this, arguments);

   //this.originalImage = gamejs.image.load("images/gubbe.png");

   this.spriteIndex = 0;

   this.sprites = 
   [
      gamejs.image.load("public/images/char_d.png"),
      gamejs.image.load("public/images/char_u.png"),
      gamejs.image.load("public/images/char_r.png"),
      gamejs.image.load("public/images/char_l.png")
   ];

   // this.rotation = 90;
   this.image = gamejs.transform.rotate(this.sprites[0], this.rotation);
   this.rect = new gamejs.Rect(rect);
   return this;
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);

Char.prototype.moveUp = function() {
   this.rect.moveIp(0,-16);
   this.spriteIndex = 1;
};

Char.prototype.moveDown = function() {
   this.rect.moveIp(0,16);
   this.spriteIndex = 0;
};

Char.prototype.moveRight = function() {
   this.rect.moveIp(16, 0);
   this.spriteIndex = 2;
};

Char.prototype.moveLeft = function() {
   this.rect.moveIp(-16, 0);
   this.spriteIndex = 3;
};

Char.prototype.move = function(x, y) {
	this.rect.moveIp(x, y);
};

Char.prototype.update = function() {
   this.image = this.sprites[this.spriteIndex]; //gamejs.transform.rotate(this.sprites[this.spriteIndex], this.rotation);
};

Char.prototype.pos = function() {
   return [this.rect.left / 16, this.rect.top / 16];
};


