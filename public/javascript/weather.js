var gamejs = require('gamejs');

exports.Weather = {

	isRaining: false,

	weatherEffects: [],

	startRain: function() {
		for(var i = 0; i < 400; i++) this.weatherEffects.push(new rainDrop());
		this.isRaining = true;
	},

	stopRain: function() {
		this.weatherEffects.length = 0;
		this.isRaining = false;
	},

	startSnow:function() {
		for(var i = 0; i < 300; i++) this.weatherEffects.push(new snowFlake());
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

var snowFlake = function() {
   this.xStart = Math.floor((Math.random()*1000)+1);
   this.x = this.xStart;
   this.yEnd = Math.floor(150+(Math.random()*650)+1);
   this.y = Math.floor((Math.random()*this.yEnd)+1);
   this.deltaY = Math.floor((Math.random()*4)+1);
   this.alpha = 0.75 + Math.random()*0.25;
   this.color = '#FFFFFF';	

}

snowFlake.prototype.draw = function(display) {
	if(this.y > this.yEnd) {
		this.y = 0;
		this.x = this.xStart;
		this.splatCounter = 0;
	}
	else {
		gamejs.draw.line(display, this.color, [this.x, this.y], [this.x+2,this.y-2 - 2*Math.sin(this.y/10)], this.alpha);
		gamejs.draw.line(display, this.color, [this.x + 2*Math.cos(this.y/10), this.y], [this.x+2,this.y+2], this.alpha);

		this.y+=this.deltaY;
		this.x = 2*Math.sin(this.y/10) + (75 + this.xStart-this.y/4); 
	}
};

var rainDrop = function() {
   this.xStart = Math.floor((Math.random()*1000)+1);
   this.x = this.xStart;
   this.yEnd = Math.floor(150+(Math.random()*650)+1);
   this.y = Math.floor((Math.random()*this.yEnd)+1);
   this.deltaY = 3 + Math.floor((Math.random()*4)+1);
   this.alpha = 0.3 + Math.random()*0.3;
   this.splatCounter = 0;
   this.color = '#0000FF';
   this.length = Math.floor((Math.random()*4)+2);
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
		gamejs.draw.line(display, this.color, [this.x, this.y], [this.x+this.length/4,this.y-this.length], this.alpha);
		gamejs.draw.line(display, this.color, [this.x+this.length/4, this.y-this.length], [this.x+this.length/2,this.y-this.length*2], this.alpha/2);
		gamejs.draw.line(display, this.color, [this.x+this.length/2,this.y-this.length*2], [this.x+this.length,this.y-this.length*4], this.alpha/4);
		this.y+=this.deltaY;
		this.x = 75 + this.xStart-this.y/4; 
	}
};