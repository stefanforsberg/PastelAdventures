var gamejs = require('gamejs');
var shared = require('shared');

var OtherChar = exports.OtherChar = function(rect, si) {
   OtherChar.superConstructor.apply(this, arguments[0]);

   this.spriteIndex = si;

   this.sprites = 
   [
      gamejs.image.load(shared.imagePath + "char_o_d.png"),
      gamejs.image.load(shared.imagePath + "char_o_u.png"),
      gamejs.image.load(shared.imagePath + "char_o_r.png"),
      gamejs.image.load(shared.imagePath + "char_o_l.png")
   ];

   this.pos = [0,0];

   this.rect = rect;
   this.image = this.sprites[this.spriteIndex];
   
   return this;
};

gamejs.utils.objects.extend(OtherChar, gamejs.sprite.Sprite);

OtherChar.prototype.place = function(pos, si) {
   this.pos = pos;
   this.spriteIndex = si;
};

OtherChar.prototype.update = function(camPos) {
   var relativePos = gamejs.utils.vectors.subtract(this.pos, camPos);

   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(p, shared.tileSize));
   this.image = this.sprites[this.spriteIndex];
};