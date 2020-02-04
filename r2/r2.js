//Kattis R2 program
/*
Algo
    -  Read data
    -  Write testing function
    -  Compute Data
        *take second number and multiply it by 2
        *subtract that number by the first number
    -  Output anser
*/


"use strict";
const asrt = require('assert').strict;


function test()
{
    var inr1 = [2, 8, 54];
    var ins1 = [15, 19, 32];
    var outr2 = [28, 30, 10];

    for (var i = 0; i<3;i++)
    {
        var ans = answer(inr1[i], ins1[i]);
        asrt.strictEqual(outr2[i], ans);
        console.log(ans, outr2[i]);
    }
    console.log('all test cases passed.');
}

function answer(r, s)
{
    return (s*2)-r;
}

function r2()
{

}

if (require.main == module)
{
    if (process.argv.length > 2 && process.argv[2] === 'test')
        test();
    else
    r2();    
}