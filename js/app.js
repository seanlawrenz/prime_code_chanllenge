function isPrime(number){
	for(var i = 2; i < number; i++) {
		if(number % i === 0) {
			return false;
		}
	}
	return number > 1;	
}

function printPrime(input1, input2){
	var arr = [input1,input2];
	arr = arr.sort(function(a,b){
		return a - b;
	});
	var lowNumber = arr[0];
	var highNumber = arr[1];
	var primeNumber = [];
	for(var i = lowNumber; i < highNumber; i++) {
		if (isPrime(i) === true){
			primeNumber.push(i)
		}
	}
	if (primeNumber.length === 0){
		return 'no primes in that range'
	}else{
		return primeNumber
	}
}

function primeNumberGenerator(){
	var input1 = document.getElementById('lowNumber').value;
	var input2 = document.getElementById('highNumber').value;
	if ((isNaN(input1) === true) || (isNaN(input2) === true)){
		alert('Please input numbers only');
	}else{
		var primeNumbers = printPrime(input1,input2);
		if(primeNumbers == 'no primes in that range'){
			document.getElementById('returnAnswer').innerHTML = '<p>There are ' + primeNumbers + '</p>';
		}else{
			document.getElementById('returnAnswer').innerHTML = '<p>The prime numbers between ' + input1 + ' and ' + input2 + ' are ' + primeNumbers + '</p>';
		}
	}
}