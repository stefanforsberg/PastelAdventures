var gamejs = require('gamejs');
var char = require('char').Char;
var otherChar = require('otherChar').OtherChar;
var world = require('world').World;
var tiles = require('tiles').Tiles;
var camera = require('camera').Camera;
var shared = require('shared');
var socket;
var users = {};
var update = true;

gamejs.preload([
   'public/images/grass.png', 
   'public/images/mountain.png', 
   'public/images/water.png', 
   'public/images/water_l.png', 
   'public/images/dessert.png', 
   'public/images/tree.png', 
   'public/images/char_d.png', 
   'public/images/char_u.png', 
   'public/images/char_r.png', 
   'public/images/char_l.png',
   'public/images/char_o_d.png', 
   'public/images/char_o_u.png', 
   'public/images/char_o_r.png', 
   'public/images/char_o_l.png',   
   'public/images/bridge.png',
   'public/images/bridge1.png',
   'public/images/snow.png',
   'public/images/mountain_snow.png',
   'public/images/water_snow.png'
   ]);

function canGoTo(w,t,x,y) {
   return w.canGoTo(x, y) && t.canGoTo(w.boardAt(x, y));
}

function moveWithCheck(canGo, moveFunction) {
   if(canGo) {
      moveFunction();
      update = true;
   }
}

function start() {

   var displayCache = new gamejs.Surface([1280, 1280]);
   var display = gamejs.display.setMode([640, 640]);

   gamejs.display.setCaption("Pastel Adventures");
   
   var w = new world();
   var c = new char([0, 0]);
   var cam = new camera(w.size());
   var t = new tiles();
   var timeDir = 1;
   var timeValue = 0.01;


   for (var x=0;x<w.width();x++) {
      for (var y=0; y<w.height(); y++) {
         displayCache.blit(t.tileAt(w.boardAt(x, y)), [x*shared.tileSize, y*shared.tileSize]);
      }
   }

   display.blit(displayCache, new gamejs.Rect([0,0], [640, 640]), new gamejs.Rect([0,0], [640, 640]));
   
   gamejs.time.fpsCallback(tick, this, 30);

   function tick(msDuration) {

      gamejs.event.get().forEach(function(event) {
         if (event.type === gamejs.event.KEY_UP) {

            var p = gamejs.utils.vectors.add(c.pos(), cam.position());

            if (event.key === gamejs.event.K_UP) {
               moveWithCheck(canGoTo(w,t,p[0], p[1]-1), function() { c.moveUp(); });
            }
            else if (event.key === gamejs.event.K_DOWN) {
               moveWithCheck(canGoTo(w,t,p[0], p[1]+1), function() { c.moveDown(); });
            }
            else if (event.key === gamejs.event.K_RIGHT) {
               moveWithCheck(canGoTo(w,t,p[0]+1, p[1]), function() { c.moveRight(); });
            }
            else if (event.key === gamejs.event.K_LEFT) {
               moveWithCheck(canGoTo(w,t,p[0]-1, p[1]), function() { c.moveLeft(); });
            }
         }

         cam.updatePosition(c);
        
      });
      
      if(update) {

         socket.emit('cu', 
         { 
            p: gamejs.utils.vectors.add(c.pos(), cam.position()),
            r: c.rotation,
            si: c.spriteIndex
         });

         display.fill("#FFFFFF");
         display.blit(displayCache, new gamejs.Rect([0,0], [640, 640]), new gamejs.Rect(cam.asPixelVector(), [640, 640]));
         
         for (var key in users) {
            users[key].update();
            users[key].draw(display);
         }

         c.update();
         c.draw(display);

         

         if(timeValue >= 0.75 || timeValue < 0.01) timeDir = timeDir*-1; 

         timeValue += 0.01*timeDir;

         gamejs.draw.rect(display, 'rgba(0,0, 0, '+ timeValue+')', new gamejs.Rect([0,0], [640, 640]));



         // update = false;
      }
   }
}

function main() {
   
   socket = io.connect('http://localhost:8080');

   socket.on('connected', function (data) {

         for (var key in data.u) {
            if(key === socket.socket.sessionid) continue;
            users[key] = new otherChar(new gamejs.Rect(gamejs.utils.vectors.multiply(data.u[key].pos, shared.tileSize)), data.u[key].si);
         }

         start();
   });

   socket.on('otherConnected', function (data) {
      users[data.u.id] = new otherChar(new gamejs.Rect(gamejs.utils.vectors.multiply(data.u.pos, shared.tileSize)), data.u.si);
      update = true;
   });

   socket.on('disconnected', function(data) {
      delete users[data.id];
      update = true;
   });

   socket.on('ocu', function (data) {
      users[data.u.id].place(data.u.pos, data.u.si);
      update = true;
   });

}


gamejs.ready(main);
