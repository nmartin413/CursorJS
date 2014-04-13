var Cursor = require('../src/cursor');
var _ = require('underscore');


describe('PointerRecord', function () {

	var distanceCalc = function (x1, y1, x2, y2, known) {
		var p1 = new Cursor.PointerRecord({ x: x1, y: y1 });
		var p2 = new Cursor.PointerRecord({ x: x2, y: y2 });
		var calc = p1.distanceFrom(p2);

		expect(calc).toBe(known);
	}


	it('should measure distance from another point', function () {
		distanceCalc(2,2,3,3,Math.sqrt(2));
		distanceCalc(3,3,2,2,Math.sqrt(2));
	});

});