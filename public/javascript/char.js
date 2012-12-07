var gamejs = require('gamejs');
var shared = require('shared');

var Char = exports.Char = function(rect) {
   Char.superConstructor.apply(this, arguments);

   this.spriteIndex = 0;
   this.step = 0;
   this.pos = [0,0];
   this.sprites = 
   [
      [gamejs.image.load(shared.imagePath + "char_d_0.png"), gamejs.image.load(shared.imagePath + "char_d.png"), gamejs.image.load(shared.imagePath + "char_d_1.png"), gamejs.image.load(shared.imagePath + "char_d.png")],
      [gamejs.image.load(shared.imagePath + "char_u.png"), gamejs.image.load(shared.imagePath + "char_u.png"), gamejs.image.load(shared.imagePath + "char_u.png"), gamejs.image.load(shared.imagePath + "char_u.png")],
      [gamejs.image.load(shared.imagePath + "char_r_0.png"), gamejs.image.load(shared.imagePath + "char_r.png"), gamejs.image.load(shared.imagePath + "char_r_1.png"), gamejs.image.load(shared.imagePath + "char_r.png")],
      [gamejs.image.load(shared.imagePath + "char_l_0.png"), gamejs.image.load(shared.imagePath + "char_l.png"), gamejs.image.load(shared.imagePath + "char_l_1.png"), gamejs.image.load(shared.imagePath + "char_l.png")]
   ];

   this.image = this.sprites[this.spriteIndex][this.step];
   
   this.rect = new gamejs.Rect(rect);
   return this; 
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);

Char.prototype.update = function() {
   var relativePos = gamejs.utils.vectors.subtract(this.pos, shared.camera.pos);

   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(relativePos, shared.tileSize));
   this.image = this.sprites[this.spriteIndex][this.step];

};

Char.prototype.place = function(pos, si) {
   this.step++;

   if(this.step > 3) {
      this.step = 0;
   }

   this.pos = pos;
   this.spriteIndex = si;
};


