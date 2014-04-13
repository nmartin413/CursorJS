// CursorJS

(function () {

	var Cursor = {};


	// Pointer Record
	var PointerRecord = Cursor.PointerRecord = function (opts) {
		var opts = opts || {};

		this.x = opts.x;
		this.y = opts.y;
		this.time = new Date().getTime();
	}

	PointerRecord.prototype.distanceFrom = function (other) {
		xs = other.x - this.x;
		xs = xs * xs;

		ys = other.y - this.y;
		ys = ys * ys;

		return Math.sqrt( xs + ys );
	}


	var trail = Cursor.trail = [];

	trail.init = function () {
		this.push(new PointerRecord());
	}

	trail.last = function () {
		return this[this.length - 1];
	}



	Cursor.reset = function () {
		trail.length = 0;
		trail.init();
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
		},
		'speed': {
			get: function () {
				if (trail.length < 2) return;

				var p1 = trail[trail.length - 2];
				var p2 = trail[trail.length - 1];
				var d = p1.distanceFrom(p2);
				var t = p2.time - p1.time;

				return d / t;
			}
		}
	});

	// Initializatin
	trail.init();


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