var vows = require('jasmine'),
    assert = require('assert');


describe('Cursor', function () {
	var Cursor = require('../src/cursor');

	it('should add a point and return correctly', function () {

		Cursor.addPoint(10,20);
		
		expect(Cursor.x).toBe(10);
		expect(Cursor.y).toBe(20);

	});


});
