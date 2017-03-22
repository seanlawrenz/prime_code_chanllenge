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
		var arr = [10,9,8,];
		arr = arr.sort(function(a,b){
			return a - b;
		});

		expect(arr.sort((a,b)=>{a-b})).to.be.sorted();
	});
});

//Stealing the Sieve of Eratosthenes algorithm
describe('primeNumberGenerator', function(){

});