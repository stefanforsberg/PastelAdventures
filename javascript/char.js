var gamejs = require('gamejs');

var Char = exports.Char = function(rect) {
   // call superconstructor
   Char.superConstructor.apply(this, arguments);
   // this.speed = 20 + (40 * Math.random());
   // ever ship has its own scale
   
   // var dims = this.originalImage.getSize();
   // this.originalImage = gamejs.transform.scale(
   //                              this.originalImage,
   //                              [dims[0] * (0.5 + Math.random()), dims[1] *  (0.5 + Math.random())]
   //                      );
   // this.rotation = 50 + parseInt(120*Math.random());
   this.originalImage = gamejs.image.load("images/gubbe.png");

   this.rotation = 90;
   this.image = gamejs.transform.rotate(this.originalImage, this.rotation);
   this.rect = new gamejs.Rect(rect);
   return this;
};

gamejs.utils.objects.extend(Char, gamejs.sprite.Sprite);