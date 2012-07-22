var gamejs = require('gamejs');

var OtherChar = exports.OtherChar = function(rect, r, si) {
   OtherChar.superConstructor.apply(this, arguments[0]);

   this.spriteIndex = si;

   this.sprites = 
   [
      gamejs.image.load("public/images/char0.png"),
      gamejs.image.load("public/images/char1.png"),
      gamejs.image.load("public/images/char0.png"),
      gamejs.image.load("public/images/char2.png")
   ];

   this.rotation = r;
   this.rect = rect;
   this.image = gamejs.transform.rotate(this.sprites[this.spriteIndex], this.rotation);
   
   return this;
};

gamejs.utils.objects.extend(OtherChar, gamejs.sprite.Sprite);

OtherChar.prototype.place = function(pos, r, si) {
   this.rotation = r;
   this.spriteIndex = si;
   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(pos, 64));
};

OtherChar.prototype.update = function() {
   this.image = gamejs.transform.rotate(this.sprites[this.spriteIndex], this.rotation);
};