var gamejs = require('gamejs');
var char = require('char').Char;
var world = require('world').World;
var tiles = require('tiles').Tiles;
var camera = require('camera').Camera;

gamejs.preload([
   'public/images/grass.png', 
   'public/images/mountain.png', 
   'public/images/water.png', 
   'public/images/dessert.png', 
   'public/images/tree.png', 
   'public/images/char0.png', 
   'public/images/char1.png', 
   'public/images/char2.png', 
   'public/images/bridge.png',
   'public/images/bridge1.png',
   'public/images/snow.png',
   'public/images/mountain_snow.png',
   'public/images/water_snow.png'
   ]);

function canGoTo(w,t,x,y) {
   return w.canGoTo(x, y) && t.canGoTo(w.boardAt(x, y));
};

function main() {
   var displayCache = new gamejs.Surface([1280, 1280]);
   var display = gamejs.display.setMode([640, 640]);
   gamejs.display.setCaption("Pastel Adventures");
   
   var w = new world();
   var c = new char([0, 64]);
   var cam = new camera(w.size());
   var t = new tiles();
      
   for (var x=0;x<w.width();x++) {
      for (var y=0; y<w.height(); y++) {
         displayCache.blit(t.tileAt(w.boardAt(x, y)), [x*64, y*64]);
      }
   }

   var socket = io.connect('http://localhost:8080');

   // socket.on('news', function (data) {
   //  console.log(data);
   //  socket.emit('my other event', { my: 'data' });
   // });

   display.blit(displayCache, new gamejs.Rect([0,0], [640, 640]), new gamejs.Rect([0,0], [640, 640]));
   
   gamejs.time.fpsCallback(tick, this, 30);

   function tick(msDuration) {

      var update = false;

      gamejs.event.get().forEach(function(event) {
         if (event.type === gamejs.event.KEY_UP) {

            update = true;

            var p = gamejs.utils.vectors.add(c.pos(), cam.position())

            if (event.key === gamejs.event.K_UP) {
               socket.emit('move', { dir: 'up' }); //if (w.canGoTo(p[0], p[1]-1)) c.moveUp();
            }
            else if (event.key === gamejs.event.K_DOWN) {
               if (canGoTo(w,t,p[0], p[1]+1)) c.moveDown();
            }
            else if (event.key === gamejs.event.K_RIGHT) {
               if (canGoTo(w,t,p[0]+1, p[1])) c.moveRight();
            }
            else if (event.key === gamejs.event.K_LEFT) {
               if (canGoTo(w,t,p[0]-1, p[1])) c.moveLeft();
            };
         }

         cam.updatePosition(c);
        
      });
      
      if(update) {
         display.fill("#FFFFFF");
         display.blit(displayCache, new gamejs.Rect([0,0], [640, 640]), new gamejs.Rect(cam.asPixelVector(), [640, 640]));
         c.update();
         c.draw(display);
      }
   };
}


gamejs.ready(main);
