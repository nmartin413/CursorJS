// CursorJS

(function () {

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


	var Cursor = {

		addPoint: function (x, y) {
			var record = new PointerRecord({ x: x, y: y });
			trail.push(record);
		}

	};

	Object.defineProperty(Cursor, 'x', {
		get: function () {
			return trail.last().x;
		}
	});


	Cursor.

	// AMD Export
	if (typeof define === 'function' && define.amd) {
		define('underscore', [], function() {
			return Cursor;
		});
	} else {
		this.Cursor = Cursor;
	}

}).call(this);