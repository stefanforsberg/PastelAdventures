var gamejs = require('gamejs');
var shared = require('shared');

var Char = exports.Char = function(rect) {
   Char.superConstructor.apply(this, arguments);

   this.spriteIndex = 0;
   this.pos = [0,0];
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

Char.prototype.update = function() {
   var relativePos = gamejs.utils.vectors.subtract(this.pos, shared.camera.position());

   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(relativePos, shared.tileSize));
   this.image = this.sprites[this.spriteIndex];
};

Char.prototype.place = function(pos, si) {
   this.pos = pos;
   this.spriteIndex = si;
};


