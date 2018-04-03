// Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop
'use strict';

function max(numbers) {
  let result = numbers[0];
  let index = 1;
  while(index < numbers.length)
  {
    result = numbers[index] > result ? numbers[index] : result;
    index++;
  }

  return result;
}

function min(numbers) {
  let result = numbers[0];
  let index = 1;
  while(index < numbers.length)
  {
    result = numbers[index] < result ? numbers[index] : result;
    index++;
  }

  return result;
}

let outputMax = max([3,2,5]);
console.log(outputMax);

let outputMin = min([10,12,0]);
console.log(outputMin);