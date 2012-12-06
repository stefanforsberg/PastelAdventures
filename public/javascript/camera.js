var $v = require('gamejs/utils/vectors');
var shared = require('shared');

var Camera = exports.Camera = function() {
    this.pos = [0,0];
    this.cameraWidth = (640 / 16);
    return this;
};

Camera.prototype.init = function(sizeOfWorld) {
    this.sizeOfWorld = sizeOfWorld;
};

// Camera.prototype.position = function() {
// 	return this.pos;
// };

// Camera.prototype.absolutePosition = function(relativePosition) {
//     return $v.add(relativePosition, this.pos);
// };

Camera.prototype.asPixelVector = function() {
   return $v.multiply(this.pos, shared.tileSize);
};

Camera.prototype.updatePosition = function(char) {
    var t = $v.subtract(char.pos, this.pos);

    if(t[0] !== 19) {
        this.pos[0] = char.pos[0] - 19;

        if(this.pos[0] > (this.sizeOfWorld[0] - this.cameraWidth))  this.pos[0] = (this.sizeOfWorld[0] - this.cameraWidth);
        if(this.pos[0] < 0) this.pos[0] = 0;
    }

    if(t[1] !== 19) {
        this.pos[1] = char.pos[1] - 19;

        if(this.pos[1] > this.sizeOfWorld[1] - this.cameraWidth) this.pos[1] = (this.sizeOfWorld[1] - this.cameraWidth);
        if(this.pos[1] < 0) this.pos[1] = 0;
    }
};