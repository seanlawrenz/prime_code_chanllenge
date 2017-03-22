'use strict';


var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
chai.use(require("chai-sorted"));

describe('isPrime', function() {
	it('should determine if the number is prime ', function() {
		var isPrime =  function(number) {
			for(var i = 2; i < number; i++) {
				if(number % i === 0) {
					return false;
				}
			}
			return number > 1;	
		}

		assert.equal(isPrime(20), false);
	});
});

describe('sortingArray', function(){
	it('should sort numbers in an array numerically', function(){
		var arr = [10,9];
		arr = arr.sort(function(a,b){
			return a - b;
		});

		expect(arr.sort((a,b)=>{a-b})).to.be.sorted();
	});
});

describe('primeNumberGenerator', function(){
	describe('printPrime', function(){
		it('should find all prime numbers up to a limit', function(){
			var isPrime =  function(number) {
				for(var i = 2; i < number; i++) {
					if(number % i === 0) {
						return false;
					}
				}
				return number > 1;	
			}
			var printPrime = function(input1, input2) {
				var arr = [input1,input2];
				arr = arr.sort(function(a,b){
					return a - b;
				});
				var lowNumber = arr[0];
				var highNumber = arr[1];
				var primeNumber = []
				for(var i = lowNumber; i < highNumber; i++) {
					if (isPrime(i) === true){
						primeNumber.push(i)
					}
				}
				return primeNumber
			}

			expect(printPrime(7900, 7920)).to.deep.equal([ 7901, 7907, 7919 ]);
		});
	});
});











