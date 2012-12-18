var gamejs = require('gamejs');
var char = require('char').Char;
var world = require('world').World;
var shared = require('shared');
var weather = require('weather').Weather;
var socket;
var update = true;
var w;
var c;

preloadImages([
   'char.png',
   'mountain.png', 
   'tree.png', 
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

function start(board) {
   var display = gamejs.display.setMode([shared.worldWidth, shared.worldHeight]);

   gamejs.display.setCaption("Pastel Adventures");
   
   w.init(board);

   weather.startSnow();

   gamejs.time.fpsCallback(tick, this, 30);

   function tick(msDuration) {

      gamejs.event.get().forEach(function(event) {
         if (event.type === gamejs.event.KEY_UP) {

            if (event.key === gamejs.event.K_UP) {
               socket.emit('cm', { d: 'u'});
            }
            else if (event.key === gamejs.event.K_DOWN) {
               socket.emit('cm', { d: 'd'});
            }
            else if (event.key === gamejs.event.K_RIGHT) {
               socket.emit('cm', { d: 'r'});
            }
            else if (event.key === gamejs.event.K_LEFT) {
               socket.emit('cm', { d: 'l'});
            }
            else if (event.key === gamejs.event.K_a) {
               socket.emit('a', {});
            }
         }
      });
      
      if(update) {
         shared.camera.updatePosition(c);
         w.updateStaticDisplay(c);
         update = false;
      }

      display.fill("#FFFFFF");
      display.blit(w.surfaces.displayStatic);

      weather.draw(display);
   }
}

function main() {
   
   socket = io.connect();

   w = new world();

   socket.on('connected', function (data) {
         c = new char(data.c.pos, 0);
         c.place(data.c.pos, data.c.si);

         for (var key in data.u) {
            if(key === socket.socket.sessionid) continue;
            w.users[key] = new char(new gamejs.Rect(gamejs.utils.vectors.multiply(data.u[key].pos, shared.tileSize)), 0.35);
            w.users[key].place(data.u[key].pos, data.u[key].si);
         }

         start(data.b);
   });

   socket.on('otherConnected', function (data) {
      w.users[data.u.id] = new char(new gamejs.Rect(gamejs.utils.vectors.multiply(data.u.pos, shared.tileSize)), 0.35);
      update = true;
   });

   socket.on('disconnected', function(data) {
      delete w.users[data.id];
      update = true;
   });

   socket.on('cm', function (data) {
      c.place(data.u.pos, data.u.si);

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