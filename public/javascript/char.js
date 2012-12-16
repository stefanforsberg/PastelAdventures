var gamejs = require('gamejs');
var shared = require('shared');
var weather = require('weather').Weather;

var Char = exports.Char = function(rect, alpha) {
   this.spriteImage = gamejs.image.load(shared.imagePath + "char.png");
   this.spriteImage.setAlpha(alpha);

   this.spriteIndex = 0;
   this.step = 0;
   this.pos = [0,0];

   this.rects = {
      standardSize: new gamejs.Rect([0,0],[shared.tileSize,shared.tileSize]),
      umbrella: new gamejs.Rect([0,64],[shared.tileSize,shared.tileSize])
   }

   this.surface = new gamejs.Surface(shared.tileSize, shared.tileSize);

   this.rect = new gamejs.Rect(rect);
   return this; 
};

Char.prototype.update = function() {
   var relativePos = gamejs.utils.vectors.subtract(this.pos, shared.camera.pos);

   this.rect = new gamejs.Rect(gamejs.utils.vectors.multiply(relativePos, shared.tileSize));

   this.surface.clear();
   
   this.surface.blit(
      this.spriteImage, 
      this.rects.standardSize, 
      new gamejs.Rect([this.step*shared.tileSize,this.spriteIndex*shared.tileSize],[shared.tileSize,shared.tileSize])
      );

   if(weather.isRaining) {
      this.surface.blit(
         this.spriteImage, 
         this.rects.standardSize, 
         this.rects.umbrella
         );
   }
};

Char.prototype.place = function(pos, si) {
   this.step++;

   if(this.step > 3) {
      this.step = 0;
   }

   this.pos = pos;
   this.spriteIndex = si;
};


