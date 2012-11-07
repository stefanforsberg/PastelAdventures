exports = module.exports = User;

function User(id) {
    this.id = id;
    this.pos = [0,0];
    this.si = 0;
    this.wood = 0;
}

User.prototype.increaseWoodAmount = function() {
	this.wood += 20;
};

User.prototype.buildBridge = function() {
	this.wood -= 40;
};

User.prototype.canBuildBridge = function() {
	return this.wood >= 40;
};