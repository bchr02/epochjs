"use strict";

var expect	= require("chai").expect;
var Epochjs	= require("../index");

describe("Track the amount of time that has elapsed", function() {
	describe("seconds", function() {
		it("is a positive number", function() {
			var epochjs = new Epochjs();
			epochjs.start();
			expect(epochjs.seconds).to.be.above(0);
		});
		it("returns a number", function() {
			var epochjs = new Epochjs();
			epochjs.start();
			expect(epochjs.seconds).to.be.a('number');
		});
	});
	describe("secElapsed()", function() {
		it("returns a number", function() {
			var epochjs = new Epochjs();
			epochjs.start();
			expect(epochjs.secElapsed()).to.be.a('number');
		});
		it("is a positive number", function() {
			var epochjs = new Epochjs();
			epochjs.start();
			expect(epochjs.secElapsed()).to.be.at.least(0);
		});
		it("returns a number even when not explicitly calling start()", function() {
			var epochjs = new Epochjs();
			expect(epochjs.secElapsed()).to.be.a('number');
		});
	});
});