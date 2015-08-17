"use strict";

var should	= require("chai").should();
var Epochjs	= require("../index");

describe("Epochjs", function() {
	describe(".start()", function() {
		it("should be called on init", function() {
			var epochjs = new Epochjs();
			should.exist(epochjs.seconds);
		});
	});
	describe(".seconds", function() {
		it("should be the number of seconds since midnight of January 1, 1970", function() {
			var epochjs = new Epochjs(),
				d = new Date(),
				r = d.getTime() / 1000;
			epochjs.start();
			epochjs.seconds.should.be.within(r,r+10);
		});
	});
	describe(".secElapsed()", function() {
		it("should return a postive number indicating the number of seconds that have ellapsed since start() was last called.", function() {
			var epochjs = new Epochjs();
			epochjs.start();
			epochjs.secElapsed().should.be.within(0,10);
		});
	});
	describe(".log()", function() {
		it("should log a message to the console", function() {
			var oldconsole = console,
				console = {
					log: function(s) {
						if (s == message) {
							return true;
						}
					}},
				message = 'test',
				result = false,
				epochjs = new Epochjs(),
				check;
			epochjs.start();
			check = epochjs.log(message);
			console = oldconsole;
			should.exist(check);
			check.should.be.true();
		});
	});
});