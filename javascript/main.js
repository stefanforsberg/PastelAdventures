var gamejs = require('gamejs');
var char = require('char').Char;

var board = [
[2,2,2,0,0,0,0,0,0,0,2,2,2,0,0,0,1,0,0,3],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,3,3],
[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,3,3,3],
[0,0,0,0,0,0,1,0,0,0,2,2,2,0,0,0,0,0,3,3],
[0,0,0,1,1,1,1,0,0,2,2,2,2,0,0,0,0,0,1,0],
[0,0,0,0,1,1,1,0,0,2,2,2,2,0,0,0,0,0,1,1],
[0,0,0,0,0,1,1,1,0,2,2,2,2,0,0,0,0,0,2,2],
[0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2],
[0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
[0,0,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2]
];

var charPos = [0,0]
var pos = [0,0];

gamejs.preload(['images/grass.png', 'images/mountain.png', 'images/water.png', 'images/dessert.png', 'images/gubbe.png']);

function main() {
   // screen setup
   var displayCache = new gamejs.Surface([1280, 640]);
   var display = gamejs.display.setMode([640, 640]);
   gamejs.display.setCaption("Example Sprites");
   // create some ship sprites and put them in a group
   
console.log(displayCache.rect.width)
   
   //console.log(char);
   

   var c = new char([0, 64]);
   console.log(c);

   var tiles = [];
   tiles.push(gamejs.image.load("images/grass.png"));
   tiles.push(gamejs.image.load("images/mountain.png"));
   tiles.push(gamejs.image.load("images/water.png"));
   tiles.push(gamejs.image.load("images/dessert.png"));
      
   for (var x=0;x<20;x++) {
      for (var y=0; y<10; y++) {
         displayCache.blit(tiles[board[y][x]], [x*64, y*64]);
      }
   }

   
   

   
   gamejs.time.fpsCallback(tick, this, 30);

   function tick(msDuration) {

      // handle key / mouse events
      gamejs.event.get().forEach(function(event) {
         if (event.type === gamejs.event.KEY_UP) {
            if (event.key === gamejs.event.K_UP) {
               //pos = gamejs.utils.vectors.add(pos, [0,64]);
               c.moveUp();
            }
            else if (event.key === gamejs.event.K_DOWN) {
               //pos = gamejs.utils.vectors.add(pos, [0,-64]);
               c.moveDown();
            }
            else if (event.key === gamejs.event.K_RIGHT) {
               //pos = gamejs.utils.vectors.add(pos, [64,0]);
               c.moveRight();
            }
            else if (event.key === gamejs.event.K_LEFT) {
               //pos = gamejs.utils.vectors.add(pos, [-64,0]);
               c.moveLeft();
            };
        }

        if(c.pos()[0] > 5 && pos[0] <= 576) {
            console.log(pos[0]);
            pos = gamejs.utils.vectors.add(pos, [64,0]);   
            c.move(-64, 0);
        }  

        if(c.pos()[0] < 4 && pos[0] > 0) {
            console.log(pos[0]);
            pos = gamejs.utils.vectors.add(pos, [-64,0]);   
            c.move(64, 0);
        }  
         
      });

      c.image = gamejs.transform.rotate(c.originalImage, c.rotation);

      display.fill("#FFFFFF");
      display.blit(displayCache, new gamejs.Rect([0,0], [640, 640]), new gamejs.Rect(pos, [640, 640]));
      c.draw(display);

      
      
   };

   // msDuration = time since last tick() call
   // var tick = function(msDuration) {
   //       mainSurface.fill("#FFFFFF");
   //       // update and draw the ships
   //       gShips.update(msDuration);
   //       gShips.draw(mainSurface);
   // };
   // gamejs.time.fpsCallback(tick, this, 20);
}


gamejs.ready(main);
