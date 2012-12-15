var $v = require('gamejs/utils/vectors');
var shared = require('shared');

var Camera = exports.Camera = function() {
    this.pos = [0,0];

    console.log(shared);

    this.cameraWidth = (shared.worldWidth / 16);
    this.cameraHeight = (shared.worldHeight / 16);

    this.cameraCenterPos = [(this.cameraWidth / 2) - 1, (this.cameraHeight / 2) - 1];

    console.log(this.cameraWidth )
    console.log(this.cameraHeight )
    console.log(this.cameraCenterPos )

    return this;
};

Camera.prototype.init = function(sizeOfWorld) {
    this.sizeOfWorld = sizeOfWorld;
};

Camera.prototype.asPixelVector = function() {
   return $v.multiply(this.pos, shared.tileSize);
};

Camera.prototype.updatePosition = function(char) {
    var t = $v.subtract(char.pos, this.pos);

    if(t[0] !== this.cameraCenterPos[0]) {
        this.pos[0] = char.pos[0] - this.cameraCenterPos[0];

        if(this.pos[0] > (this.sizeOfWorld[0] - this.cameraWidth))  this.pos[0] = (this.sizeOfWorld[0] - this.cameraWidth);
        if(this.pos[0] < 0) this.pos[0] = 0;
    }

    if(t[1] !== this.cameraCenterPos[1]) {
        this.pos[1] = char.pos[1] - this.cameraCenterPos[1];

        if(this.pos[1] > this.sizeOfWorld[1] - this.cameraWidth) this.pos[1] = (this.sizeOfWorld[1] - this.cameraWidth);
        if(this.pos[1] < 0) this.pos[1] = 0;
    }
};