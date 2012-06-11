var gamejs = require('gamejs');
var $v = require('gamejs/utils/vectors');

var Camera = exports.Camera = function(sizeOfWorld) {

	this.pos = [0,0];
	this.sizeOfWorld = sizeOfWorld;
	return this;
};

Camera.prototype.position = function() {
	return this.pos;
};

Camera.prototype.asPixelVector = function() {
   return $v.multiply(this.pos, 64);
};

Camera.prototype.updatePosition = function(char) {
    if(char.pos()[0] > 5 && this.pos[0] <= this.sizeOfWorld[0]-11) {
 	    this.pos = $v.add(this.pos, [1,0]);   
	    char.move(-64, 0);
    }  

    if(char.pos()[0] < 4 && this.pos[0] > 0) {
        
        this.pos = $v.add(this.pos, [-1,0]);   
        char.move(64, 0);
    }  
};