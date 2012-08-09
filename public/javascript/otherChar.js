var gamejs = require('gamejs');

var OtherChar = exports.OtherChar = function(rect, si) {
   OtherChar.superConstructor.apply(this, arguments[0]);

   this.spriteIndex = si;

   this.sprites = 
   [
      gamejs.image.load("public/images/char_d.png"),
      gamejs.image.load("public/images/char_u.png"),
      gamejs.image.load("public/images/char_r.png"),
      gamejs.image.load("public/images/char_l.png")
   ];

   this.rect = rect;
   this.image = this.sprites[this.spriteIndex];
   
   return this;
};

gamejs.utils.objects.extend(OtherChar, gamejs.sprite.Sprite);

OtherChar.prototype.place = function(pos, si) {
   this.spriteIndex = si;
   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(pos, 16));
};

OtherChar.prototype.update = function() {
   this.image = this.sprites[this.spriteIndex];
};