exports = module.exports = User;

function User(id) {
    this.id = id;
    this.pos = [0,0];
    this.si = 0;
    this.wood = 0;
}

User.prototype.move = function(newPos) {
	this.pos = newPos;
};

User.prototype.pointingPos = function() {
   var pointingPos;

   if(this.si === 1) { 
      pointingPos = [0,-1];
   }
   else if(this.si === 0) { 
      pointingPos = [0,1];
   }
   else if(this.si === 3) { 
      pointingPos = [-1,0];
   }
   else if(this.si === 2) { 
      pointingPos = [1,0];
   }

   return [this.pos[0] + pointingPos[0], this.pos[1] + pointingPos[1]];
};

User.prototype.increaseWoodAmount = function() {
	this.wood += 20;
};

User.prototype.buildBridge = function() {
	this.wood -= 40;
};

User.prototype.canBuildBridge = function() {
	return this.wood >= 40;
};