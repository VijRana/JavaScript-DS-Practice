'use strict';

var averageTempDay1 = [72,75,79,79,81,81];
var averageTempDay2 = [81,79,75,75,73,72];



//same as
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

function printMatrix(arrays){
	for(var i=0; i<arrays.length; i++){
         for(var j=0; j<arrays[i].length; j++){
            console.log(arrays[i][j]);
         }
	}
}

printMatrix(averageTemp);

var averageTemp = [];
//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

printMatrix(averageTemp);

//** Multidimensional Matrix

//Matrix 3x3x3 - Cube

var matrix3x3x3 = [];
for (var i=0; i<3; i++){
    matrix3x3x3[i] = [];
    for (var j=0; j<3; j++){
        matrix3x3x3[i][j] = [];
        for (var z=0; z<3; z++){
            matrix3x3x3[i][j][z] = i+j+z;
        }
    }
}

for (var i=0; i<matrix3x3x3.length; i++){
    for (var j=0; j<matrix3x3x3[i].length; j++){
        for (var z=0; z<matrix3x3x3[i][j].length; z++){
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}
