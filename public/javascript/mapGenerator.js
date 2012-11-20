var gamejs = require('gamejs');
gamejs.preload(['./images/map_sprites.png']);

function drawTmx() {
   var map = new gamejs.tmx.Map('images/map.tmx');

   var maplayer = map.layers[3];

   var mapArray = "<pre><br />var board = {<br/>&nbsp;&nbsp;";
   var currentRow;

   maplayer.gids.forEach(function(row, i) {

      row.forEach(function(gid, j) {

         if (gid ===0) {
            return;
         }

         var tileSurface = map.tiles.getSurface(gid);
         if (tileSurface) {
                        
            currentRow = "t" + j + "x" + i + ": " + gid + ", ";  
         } 
         else {

            gamejs.log('no gid ', gid, i, j, 'layer', i);
         }

         mapArray += currentRow;

      }, this);

   }, this);

   mapArray = mapArray.substring(0, mapArray.length - 2);
   mapArray += "<br />};</pre>";

   var txt=document.getElementById("code")
   txt.innerHTML = mapArray;
}

function main() {
   drawTmx();



}

gamejs.ready(main);