var gamejs = require('gamejs');
var char = require('char').Char;
var otherChar = require('otherChar').OtherChar;
var world = require('world').World;
var camera = require('camera').Camera;
var shared = require('shared');
var weather = require('weather').Weather;
var socket;
var update = true;
var charMoved = false;
var w;
var t;
var tmxDisplay;

preloadImages([
   'mountain.png', 
   'tree.png', 
   'char_d.png', 
   'char_u.png', 
   'char_r.png', 
   'char_l.png',
   'char_o_d.png', 
   'char_o_u.png', 
   'char_o_r.png', 
   'char_o_l.png',   
   'tree_chopped.png',
   'bridge_v.png'
   ]);

function preloadImages(images) {
   var imagesWithPath = [];

   for(var i = 0; i < images.length; i++) {
      imagesWithPath.push(shared.imagePath + images[i]);
   }

   // tmx map uses a different key
   imagesWithPath.push("./" + shared.imagePath + "map_sprites.png");

   gamejs.preload(imagesWithPath);
}

function moveWithCheck(canGo, moveFunction) {
   update = true;
   if(canGo) {
      moveFunction();
      charMoved = true;
   }
}

function start(board) {
   var display = gamejs.display.setMode([640, 640]);

   gamejs.display.setCaption("Pastel Adventures");
   
   w = new world(board);
   var c = new char([0, 0]);

   var cam = new camera(w.size());

   weather.startRain();

   gamejs.time.fpsCallback(tick, this, 30);

   function tick(msDuration) {

      gamejs.event.get().forEach(function(event) {
         if (event.type === gamejs.event.KEY_DOWN) {

            var relativePos = gamejs.utils.vectors.add(c.pos(), cam.position());

            if (event.key === gamejs.event.K_UP) {
               c.turnUp();
               moveWithCheck(w.canGoTo(relativePos[0], relativePos[1]-1), function() { c.moveUp(); });
            }
            else if (event.key === gamejs.event.K_DOWN) {
               c.turnDown();
               moveWithCheck(w.canGoTo(relativePos[0], relativePos[1]+1), function() { c.moveDown(); });
            }
            else if (event.key === gamejs.event.K_RIGHT) {
               c.turnRight();
               moveWithCheck(w.canGoTo(relativePos[0]+1, relativePos[1]), function() { c.moveRight(); });
            }
            else if (event.key === gamejs.event.K_LEFT) {
               c.turnLeft();
               moveWithCheck(w.canGoTo(relativePos[0]-1, relativePos[1]), function() { c.moveLeft(); });
            }
            else if (event.key === gamejs.event.K_a) {
               
               var relativePointingPos = gamejs.utils.vectors.add(c.pointingPos(), cam.position());

               socket.emit('a', 
               { 
                  p: relativePointingPos
               });
            }
            else if (event.key === gamejs.event.K_r) {
               weather.toggleRain();
            }
         }

         cam.updatePosition(c);
        
      });
      
      if(update) {

         // Other things besides char moving can trigger updates, for instance other people moving
         if(charMoved) {
            socket.emit('cu', 
            { 
               p: gamejs.utils.vectors.add(c.pos(), cam.position()),
               r: c.rotation,
               si: c.spriteIndex
            });
         }

         w.updateStaticDisplay(cam, c);

         update = false;
         charMoved = false;
      }

      display.fill("#FFFFFF");
      display.blit(w.surfaces.displayStatic);

      weather.draw(display);
   }
}

function main() {
   
   socket = io.connect('http://localhost:8080');

   socket.on('connected', function (data) {

         for (var key in data.u) {
            if(key === socket.socket.sessionid) continue;
            w.users[key] = new otherChar(new gamejs.Rect(gamejs.utils.vectors.multiply(data.u[key].pos, shared.tileSize)), data.u[key].si);
            w.users[key].place(data.u[key].pos, data.u[key].si);
         }

         start(data.b);
   });

   socket.on('otherConnected', function (data) {
      w.users[data.u.id] = new otherChar(new gamejs.Rect(gamejs.utils.vectors.multiply(data.u.pos, shared.tileSize)), data.u.si);
      update = true;
   });

   socket.on('disconnected', function(data) {
      delete w.users[data.id];
      update = true;
   });

   socket.on('ocu', function (data) {
      w.users[data.u.id].place(data.u.pos, data.u.si);
      update = true;
   });

   socket.on('worldChanged', function (data) {
      w.setBoardAt(data.x, data.y, data.v);
      w.drawObjects();
      update = true;
   });

   socket.on('wood', function (data) {
      $("#wood span").text(data.u.wood);
   });
}

gamejs.ready(main);