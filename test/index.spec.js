var _ = require('underscore');
var Cursor = require('../src/cursor');

describe('Cursor', function () {

	it('should reset its internal points', function () {

		Cursor.addPoint(1, 2);
		
		expect(Cursor.x).toBe(1);
		expect(Cursor.y).toBe(2);

		Cursor.reset();

		expect(Cursor.x).not.toBeDefined();
		expect(Cursor.y).not.toBeDefined();
		expect(Cursor.velocity).not.toBeDefined();

	});

	it('should add a point and return correctly', function () {
		Cursor.reset();
		Cursor.addPoint(10,20);

		expect(Cursor.x).toBe(10);
		expect(Cursor.y).toBe(20);

	});

	it('should return the latest', function () {
		Cursor.reset();
		Cursor.addPoint(10,20);
		Cursor.addPoint(30,40);

		expect(Cursor.x).toBe(30);
		expect(Cursor.y).toBe(40);

	});

	it('should return the speed in pixels/ms (single axis)', function (done) {
		Cursor.reset();

		var x1 = 100;
		var x2 = 200;
		var t = 200;

		// single axis
		Cursor.addPoint(x1, 0);
		
		setTimeout(function () {
			Cursor.addPoint(x2, 0);
			
			var expected = (x2 - x1) / t;
			var vel = (x2 - x1) / t;
			expect(Cursor.speed).toBe(vel);
			
			done();

		}, t);

	});


});


