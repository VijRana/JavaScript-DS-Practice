//introduction to arrays...................................
 
var averageTemp= [];
/**
var averageTempJan = 31.9;
var averageTempFeb = 35.3;
var averageTempMar = 42.4;
var averageTempApr = 52;
var averageTempMay = 60.8;
*/
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

//........................................................
//console.log(averageTemp[0]);

var daysOfWeek = [];

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var daysOfWeek = new Array(); //{1}

var daysOfWeek = new Array(7); //{2}

console.log(daysOfWeek.length);

var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); //{3}

// To access element of array.

for (var i=0; i<daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

// Problem 1 :  Fiboncii Number upto 20.

//fibonacci numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
var fibonacci = []; //{1}
fibonacci[1] = 1; //{2}
fibonacci[2] = 1; //{3}

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; ////{4}
}

for(var i = 1; i<fibonacci.length; i++){ //{5}
    console.log(fibonacci[i]);           //{6}
}
console.log(fibonacci);




















