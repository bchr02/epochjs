"use strict";

function Epochjs() {
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
		msg = this.secElapsed() + ' ' + msg;
		console.log(msg);
		return msg;
	}	
};

module.exports = Epochjs;