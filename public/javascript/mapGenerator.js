var gamejs = require('gamejs');
gamejs.preload(['./images/map_sprites.png']);

function drawTmx() {
   var map = new gamejs.tmx.Map('images/map.tmx');

   var maplayer = map.layers[1];

   var mapArray = "<pre><br />var board = [<br/>";
   var currentRow;

   maplayer.gids.forEach(function(row, i) {

      mapArray += "["

      row.forEach(function(gid, j) {

         if (gid ===0) {
            mapArray += "0 ,";   
            return;
         }

         var tileSurface = map.tiles.getSurface(gid);
         if (tileSurface) {
            
            console.log(gid.toString().length);

            if(gid.toString().length === 1) {
               currentRow = gid + " ,";  
            }
            else {
               currentRow = gid + ",";  
            }
         } 
         else {

            gamejs.log('no gid ', gid, i, j, 'layer', i);
         }

         mapArray += currentRow;

      }, this);

      mapArray = mapArray.substring(0, mapArray.length - 1);
      mapArray += "],<br />"

   }, this);

   mapArray += "];<br /></pre>";

   var txt=document.getElementById("code")
   txt.innerHTML = mapArray;
}

function main() {
   drawTmx();



}

gamejs.ready(main);