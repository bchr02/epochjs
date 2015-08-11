"use strict";

var epoch = (function() {
	var d, s;
	
	function start() {
		d = new Date(),
		s = d.getTime() / 1000;
	}
	
	function secElapsed() {
		var d = new Date(),
			r = (d.getTime() / 1000) - s;
		
		if (typeof s === 'undefined') {
			console.error('ERROR: start() must be called before secElapsed()');
			return 0;
		}
		
		r = Math.round(r * 100) / 100;
		
		return r;
	}
	
	function log(msg){
		console.log(epoch.secElapsed() + ' ' + msg);	
	}
	
	return {
		start: start,
		secElapsed: secElapsed,
		log: log
	};
})();

module.exports = epoch;