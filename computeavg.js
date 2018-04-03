//Redo "Compute the average" exercise but use the Array.forEach() method instead of a for loop

function computeAvg(numbers) {
	let sum = 0;
	numbers.forEach(element => {
		sum += element;
	});
	return sum;
}

let outPut = computeAvg([1,2,3]);
console.log(outPut);
