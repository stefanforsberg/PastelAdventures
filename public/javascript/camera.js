var gamejs = require('gamejs');
var $v = require('gamejs/utils/vectors');
var shared = require('shared');

var Camera = exports.Camera = function(sizeOfWorld) {

	this.pos = [0,0];
	this.sizeOfWorld = sizeOfWorld;
	return this;
};

Camera.prototype.position = function() {
	return this.pos;
};

Camera.prototype.asPixelVector = function() {
   return $v.multiply(this.pos, shared.tileSize);
};

Camera.prototype.updatePosition = function(char) {
    if(char.pos()[0] > 5 && this.pos[0] <= this.sizeOfWorld[0]-44) {
 	    this.pos = $v.add(this.pos, [1,0]);   
	    char.move(-shared.tileSize, 0);
    }  

    if(char.pos()[1] > 5 && this.pos[1] <= this.sizeOfWorld[1]-44) {
 	    this.pos = $v.add(this.pos, [0,1]);   
	    char.move(0, -shared.tileSize);
    }  

    if(char.pos()[0] < 4 && this.pos[0] > 0) {
        this.pos = $v.add(this.pos, [-1,0]);   
        char.move(shared.tileSize, 0);
    }  

    if(char.pos()[1] < 4 && this.pos[1] > 0) {
        this.pos = $v.add(this.pos, [0,-1]);   
        char.move(0, shared.tileSize);
    } 
};