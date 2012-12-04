var $v = require('gamejs/utils/vectors');
var shared = require('shared');

var Camera = exports.Camera = function(sizeOfWorld) {
	this.pos = [0,0];
	return this;
};

Camera.prototype.init = function(sizeOfWorld) {
    this.sizeOfWorld = sizeOfWorld;
};

Camera.prototype.position = function() {
	return this.pos;
};

Camera.prototype.absolutePosition = function(relativePosition) {
    return $v.add(relativePosition, this.pos);
};

Camera.prototype.asPixelVector = function() {
   return $v.multiply(this.pos, shared.tileSize);
};

Camera.prototype.updatePosition = function(char) {
    var t = $v.subtract(char.pos, this.pos);

    if(t[0] > 28 && this.pos[0] <= this.sizeOfWorld[0] - 41) {
        this.pos = $v.add(this.pos, [1,0]);   
    }  

    if(t[1] > 28 && this.pos[1] <= this.sizeOfWorld[1] - 41) {
        this.pos = $v.add(this.pos, [0,1]);   
    }  

    if(t[0] < 12 && this.pos[0] > 0) {
        this.pos = $v.add(this.pos, [-1,0]);   
    }  

    if(t[1] < 12 && this.pos[1] > 0) {
        this.pos = $v.add(this.pos, [0,-1]);   
    } 
};