//Kattis Comleting the Square Program
/*
Algo
    -  Read data
        * store three locations into A, B, and C
    -  Write testing function
    -  Compute Data
        * get the distance between all of the points using distance formula
        * find center of square using hypotenuse
        * using center point, calculate the missing point
    -  Output answer
*/
"use strict";
const asrt = require('assert').strict;
const readline = require('readline');

var userinput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function test()
{
    var test_case_one_A = [-10, 5];
    var test_case_one_B = [-10, -15];
    var test_case_one_C = [10, -15];

    var test_case_two_A = [170, 10];
    var test_case_two_B = [110, 150];
    var test_case_two_C = [-30, 90];

    var test_case_three_A = [4, -28];
    var test_case_three_B = [-33, -14];
    var test_case_three_C = [-47, -51];

    var ans_one = [10, 5];
    var ans_two = [30, -50];
    var ans_three = [-10, -65];    

    /*
    Had to use deepEqual instead of strictEqual because it was failing do to the use of arrays.
    From my understanding arrays are objects and cannot be compared with a '==='
    I found the answer here: https://stackoverflow.com/questions/13225274/the-difference-between-assert-equal-and-assert-deepequal-in-javascript-testing-w
    */
    asrt.deepEqual(solve(test_case_one_A, test_case_one_B, test_case_one_C), ans_one);
    asrt.deepEqual(solve(test_case_two_A, test_case_two_B, test_case_two_C), ans_two);
    asrt.deepEqual(solve(test_case_three_A, test_case_three_B, test_case_three_C), ans_three);
    console.log('all test cases passed.');
}

function solve(A, B, C)
{
    var cen_point = [];
    var dis_AB = distance(A, B);
    var dis_BC = distance(B, C);
    var dis_CA = distance(C, A);

    //Determine the hypotenuse
    switch(dis_AB)
    {
        case dis_BC:
            cen_point = center(C, A);
            return ans(B, cen_point);
            break;
        case dis_CA:
            cen_point = center(B, C);
            return ans(A, cen_point);
            break;
        default:
            cen_point = center(A, B);
            return ans(C, cen_point);
            break;
    }  
}

//Using Distance formula to find lengths of sides
function distance(A, B)
{
    return Math.sqrt(Math.pow(B[0]-A[0], 2)+Math.pow(B[1]-A[1],2));
}

//Finding the center of the square
function center(A, B)
{
    var C = [];
    C[0] = (A[0]+B[0])/2;
    C[1] = (A[1]+B[1])/2;
    return C;
}

function ans(A, cen_point)
{
    var final_point = [];

    final_point[0] = cen_point[0] + (cen_point[0]- A[0]);
    final_point[1] = cen_point[1] + (cen_point[1]- A[1]);
    return final_point;
}

function get_points()
{

}

if (require.main == module)
{
    if (process.argv.length > 2 && process.argv[2] === 'test') test();
    else get_points();    
}