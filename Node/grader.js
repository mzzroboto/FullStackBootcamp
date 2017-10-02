function arraySum(numbers) {
	var sum = 0;

	for(var i = 0; i < numbers.length; i++){
		sum += numbers[i];
	}
	return sum;
}

function average(numbers){
	var sum = arraySum(numbers);
	
	var avg = sum/numbers.length;
	var roundedavg = Math.round(avg);
	
	return roundedavg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scoresavg = average(scores);
console.log(scoresavg);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
var scoresavg2= average(scores2);
console.log(scoresavg2);