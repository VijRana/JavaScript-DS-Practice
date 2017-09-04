'use strict';

// To access element from array.
function printArray(arrays){
   for(var i=0; i<arrays.length; i++){
      console.log(arrays[i]);
   }
}

var numbers = [0,1,2,3,4,5,6,7,8,9];
//add a new element to the numbers array
numbers[numbers.length] = 10;

numbers.push(11);

numbers.push(12, 13);
//printArray(numbers);

//insert first position manually
for (var i=numbers.length; i>=0; i--){
    numbers[i] = numbers[i-1];
}

numbers[0] = -1;
//printArray(numbers);

/using method unshift
numbers.unshift(-2);

//printArray(numbers);

numbers.unshift(-4, -3);

//printArray(numbers);

//**** Removing elements

numbers.pop();

//remove first position manually
/*for (var i=0; i<numbers.length; i++){
    numbers[i] = numbers[i+1];
}*/
//**** Removing and Adding elements from the middle of the array or specific position
//splice method - parameter (index, howManyPositionsToBeRemoved, item1...itemX)
numbers.splice(5,3);

console.log('----');

printArray(numbers);

numbers.splice(5,0,2,3,4);

console.log('----');

printArray(numbers);

console.log('----');

numbers.splice(5,3,2,3,4);

printArray(numbers);


