//Kattis Some Sum
/*
Algo
    -  Read data
    -  Write testing function
    -  Compute Data
        *1,3,5,7,9 can be either
        *2,6,10 are odd
        *4,8 are even
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
    var inr1 = ['4', '10', '7'];
    var out1 = ['Even', 'Odd', 'Either'];

    for (var i = 0; i<3;i++)
    {
        var ans = solve(inr1[i]);
        asrt.strictEqual(out1[i], ans);
    }
    console.log('all test cases passed.');
}
function solve(user_num)
{
    switch(user_num) {
        case '4':
        case '8':
          return 'Even';
          break;
        case '2':
        case '6':
        case '10':
          return 'Odd';
          break;
        default:
          return 'Either';
      } 
}

function input_data()
{
    //Get Numbers from user
    userinput.on('line', (numin) => {
        console.log(solve(numin));
        userinput.close();  
    });

}
if (require.main == module)
{
    var answer;
    if (process.argv.length > 2 && process.argv[2] === 'test')  test();
    else  input_data();
}
