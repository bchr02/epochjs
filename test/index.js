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
	describe(".log('test')", function() {
		it("should return a message", function() {
			var epochjs = new Epochjs(),
				msg		= 'test',
				result	= epochjs.log(msg),
				pass	= (result.indexOf(msg) > -1) ? true : false;
			
			should.exist(pass);
			pass.should.equal(true);
		});
	});
});