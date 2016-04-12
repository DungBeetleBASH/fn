var fn = require('../fn');

describe("fn tests", function() {

	var addOne = function (n) {
			return n + 1;
		},
		multiplyByThree = function (n) {
			return n * 3;
		},
		addThreeNumbers = function (n1, n2, n3) {
			return n1 + n2 + n3;
		};

	describe("compose()", function() {
		it("Performs right to left function composition", function() {
			var expected = 15,
				composed = fn.compose(multiplyByThree, addOne);
			expect(composed(4)).toBe(15);
		});
	});

	describe("curry()", function() {
		it("Creates a curried function", function() {
			var curried = fn.curry(addThreeNumbers),
				curried2 = curried(5),
				curried3 = curried2(5);
			expect(typeof curried(5)).toBe("function");
			expect(typeof curried2(5)).toBe("function");
			expect(curried3(5)).toBe(15);
		});
		it("Creates a curried function", function() {
			var curried = fn.curry(addThreeNumbers);
			expect(curried(5)(5)(5)).toBe(15);
			expect(curried(5, 5)(5)).toBe(15);
			expect(curried(5)(5, 5)).toBe(15);
		});
	});

	describe("fork()", function() {
		it("Returns a function for performing a forking operation", function() {
			
		});
	});

	describe("partial()", function() {
		it("Creates a partially applied function", function() {
			
		});
	});

	describe("pipe()", function() {
		it("Performs left to right function composition", function() {
			var expected = 15,
				composed = fn.pipe(addOne, multiplyByThree);
			expect(composed(4)).toBe(15);
		});
	});

	describe("previousIndex()", function() {
		it("Returns the previous index in an array in a cyclic manner", function() {
			
		});
	});

	describe("nextIndex()", function() {
		it("Returns the next index in an array in a cyclic manner", function() {
			
		});
	});

	describe("previous()", function() {
		it("Returns the previous element in an array in a cyclic manner", function() {
			
		});
	});

	describe("next()", function() {
		it("Returns the next element in an array in a cyclic manner", function() {
			
		});
	});

	describe("last()", function() {
		it("Returns the last element in an array", function() {
			
		});
	});

});