//Kattis R2 program
/*
Algo
    -  Read data
    -  Write testing function
    -  Compute Data
        *take second number and multiply it by 2
        *subtract that number by the first number
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
    var inr1 = [-900, 80, 54];
    var ins1 = [345, 650, 32];
    var outr2 = [1590, 1220, 10];

    for (var i = 0; i<3;i++)
    {
        var ans = answer(inr1[i], ins1[i]);
        asrt.strictEqual(outr2[i], ans);
    }
    console.log('all test cases passed.');
}

function answer(r, s)
{
    return (s*2)-r;
}

function r2()
{
    //Get Numbers from user
    userinput.question('',function (numin) 
    {
        var split_numin = numin.split(' ')
        var r1 = parseInt(split_numin[0]);
        var s1 = parseInt(split_numin[1]);
        console.log(answer(r1, s1));
         userinput.close();     
    });
}

if (require.main == module)
{
    if (process.argv.length > 2 && process.argv[2] === 'test') test();
    else r2();    
}