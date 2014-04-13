// CursorJS

(function () {

	var Cursor = {};

	// Pointer Record
	function PointerRecord(opts) {
		this.x = opts.x;
		this.y = opts.y;
		this.time = new Date().getTime();
	}

	var trail = Cursor.trail = [];
	trail.last = function () {
		return this[this.length - 1];
	}


	Cursor.addPoint = function (x, y) {
		var record = new PointerRecord({ x: x, y: y });
		trail.push(record);
	}
	

	Object.defineProperties(Cursor, {
		'x': {
			get: function () {
				return trail.last().x;
			}
		},
		'y': {
			get: function () {
				return trail.last().y;
			}
		}
	});


	// AMD Export
	if (typeof define === 'function' && define.amd) {
		define(function() {
			return Cursor;
		});

	// Node JS
	} else if (module && module.exports) {
		module.exports = Cursor;

	} else {
		this.Cursor = Cursor;
	}

}).call(this);