var gamejs = require('gamejs');

exports.Weather = {

	isRaining: false,

	weatherEffects: [],

	startRain: function() {
		for(var i = 0; i < 200; i++) this.weatherEffects.push(new rainDrop());
		this.isRaining = true;
	},

	stopRain: function() {
		this.weatherEffects.length = 0;
		this.isRaining = false;
	},

	toggleRain: function() {
		if(this.isRaining) {
			this.stopRain();
		}
		else {
			this.startRain();
		}
	},

	draw: function(display) {
		for(var i = 0; i < this.weatherEffects.length; i++) this.weatherEffects[i].draw(display);
	}
};

var rainDrop = function() {
   this.xStart = Math.floor((Math.random()*1000)+1);
   this.x = this.xStart;
   this.yEnd = Math.floor(150+(Math.random()*650)+1);
   this.y = Math.floor((Math.random()*this.yEnd)+1);
   this.deltaY = 3 + Math.floor((Math.random()*4)+1);
   this.alpha = 0.3 + Math.random()*0.5;
   this.splatCounter = 0;
   this.color = '#0000FF';
};

rainDrop.prototype.draw = function(display) {
	if(this.y > this.yEnd) {
		if(this.splatCounter > 5) {
			this.y = 0;
			this.x = this.xStart;
			this.splatCounter = 0;
		}
		else {
			gamejs.draw.line(display, this.color, [this.x,this.y], [this.x+this.splatCounter,this.y], 0.4);
			gamejs.draw.line(display, this.color, [this.x,this.y], [this.x+this.splatCounter,this.y+this.splatCounter], 0.4);
			gamejs.draw.line(display, this.color, [this.x,this.y], [this.x-this.splatCounter,this.y], 0.4);
			gamejs.draw.line(display, this.color, [this.x,this.y], [this.x-this.splatCounter,this.y-this.splatCounter], 0.4);

			this.splatCounter++;
		}
	}
	else {
		gamejs.draw.line(display, this.color, [this.x, this.y], [this.x+3,this.y-3], this.alpha);
		this.y+=this.deltaY;
		this.x = 75 + this.xStart-this.y/4; 
	}
};