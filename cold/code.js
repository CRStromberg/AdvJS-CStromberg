/*
Example From Class
Not used for assignments
---Cold-puter Science---
*/

/*
Algo steps:
1.  Read data
2.  If less than 0, incriment counter
3.  Write test cases
4.  Display answer
*/


"user strict";
const assert = require('assert').strict;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function add(val) {
    if (val < 0) return 1;
    else return 0;
}

function answer(numsArray) {
    var count = 0;
    /*
    function takes array of integers and returns the count of negative values
    */
    for(var num of numsArray) {
        count += add(num);
    }
    return count;
}

function test() {
    assert.strictEqual(answer([1, 10, -100, 0, -5]), 2, "assertion failed");
    assert.strictEqual(answer([0, 1, 1000000]), 0, "assertion not 0");
    assert.strictEqual(answer([-1, -4, -1000000]), 3, "not 3");
    console.log('all test cases passed...');    
}

function kattis() {
    rl.on('line', (line) => {
        if (lineNum === 0 ) lineNum++;
        else {
            var strNums = line.split(" ");
            console.log(strNums);
            rl.close();
        }
    });
}

if (require.main == module) {
    if (process.argv.length === 3 && process.argv[2] == 'runTest') test();
    else kattis();
}