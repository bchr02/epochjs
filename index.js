"use strict";

function Epochjs() {
	this.seconds; // the number of seconds between midnight of January 1, 1970 and this.start().
	this.start();
}

Epochjs.prototype = {
	start: function() {
		var d = new Date();
		this.seconds = d.getTime() / 1000;
	},
	secElapsed: function() {
		var d = new Date(),
			r = (d.getTime() / 1000) - this.seconds;
		
		if (typeof this.seconds != 'number'){return;}
		
		r = Math.round(r * 100) / 100;
		
		return r;
	},
	log: function(msg) {
		console.log(secElapsed() + ' ' + msg);
	}	
}

module.exports = Epochjs;