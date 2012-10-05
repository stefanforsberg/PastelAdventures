exports = module.exports = User;

function User(id) {
    this.id = id;
    this.pos = [0,0];
    this.si = 0;
    this.wood = 0;
}

User.prototype.IncreaseWoodAmount = function() {
	this.wood += 20;
};