//Kattis Akcija program
/*
Algo
    -  Read data
        *Store first number for N
        *Store the rest in array
    -  Write testing function
    -  Compute Data
        *Sort array (largest to smallest)
        *Add two, thow out the third
            *repeat until end of array
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
    var test_case_one = [5, 9, 2, 5, 2, 11]; //11 9 5 2 2 = $24
    var test_case_two = [3, 12, 5, 7];  //12 7 5 = $19
    var test_case_three = [11, 2, 8, 4, 12, 7, 9, 15, 22, 2, 3, 19]; //22 19 15 12 9 8 7 4 3 2 2 = $77
    var ans_one = 24;
    var ans_two = 19;
    var ans_three = 77;    

    asrt.strictEqual(ans(test_case_one), ans_one);
    asrt.strictEqual(ans(test_case_two), ans_two);
    asrt.strictEqual(ans(test_case_three), ans_three);
    console.log('all test cases passed.');
}

function solve()
{
    userinput.question('', function(num) {
        var num_books = num.split('\n');
        console.log(num_books);

        userinput.close();
    });

    
    
    
}

function ans(books)
{
    var n = books[0];
    var total = 0;

    //delete N, move everything down, and sort array
    books.shift();
    books.sort(function(a, b){return b - a});
 
    for(var i = 0;i<n;i++)
    {
        if((i+1)%3===0) var temp = books[i]
        else total += books[i];
    }
    return total;
}

if (require.main == module)
{
    if (process.argv.length > 2 && process.argv[2] === 'test') test();
    else solve();    
}