var gamejs = require('gamejs');
var shared = require('shared');

var OtherChar = exports.OtherChar = function(rect, si) {
   OtherChar.superConstructor.apply(this, arguments[0]);

   this.spriteIndex = si;

   this.sprites = 
   [
      gamejs.image.load(shared.imagePath + "char_d.png"),
      gamejs.image.load(shared.imagePath + "char_u.png"),
      gamejs.image.load(shared.imagePath + "char_r.png"),
      gamejs.image.load(shared.imagePath + "char_l.png")
   ];

   for(var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].setAlpha(0.35);
   }

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

OtherChar.prototype.update = function() {
   var relativePos = gamejs.utils.vectors.subtract(this.pos, shared.camera.pos);

   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(relativePos, shared.tileSize));
   this.image = this.sprites[this.spriteIndex];
};