/*
Kattis Problem
Babelfish

    Algorithm
-----------------
-   Read Data
    -   Create Dictionary from data
    -   Read words to be translated
-   Write test cases
-   Compute data
    -   search Dictionary for word to be translated
    -   return answer
-   Output the Answer
*/
"use strict";
const asrt = require('assert').strict;
const readline = require('readline');

var userinput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var Dictionary = new Map();

function test()
{
    create_dictionary('hello', 'hallo');
    create_dictionary('may', 'kann');
    create_dictionary('saturday', 'samstag');

    var test_case1 = 'hallo';
    var test_case2 = 'wasd';
    var test_case3 = 'samstag';

    asrt.strictEqual(ans(test_case1), 'hello');
    asrt.strictEqual(ans(test_case2), 'eh');
    asrt.strictEqual(ans(test_case3), 'saturday');

    console.log('All Test Cases Passed...');
    process.exit();
}

function ans(trans)
{
    if(Dictionary.has(trans))
    {
    return Dictionary.get(trans);
    }
    else return 'eh';
}

function create_dictionary(kn, unkn)
{
    Dictionary.set(unkn, kn);
}

function get_data()
{
    var total_data = [];
    userinput.on('line', function(temp) {
        //Pushing all user input into array
        total_data.push(temp);
    }).on('close', () => {
        var i;
        var ansck = 0;
        var tempk, tempuk, temp_long;
        for (i = 0; i < total_data.length; i++) 
        {
            //Check if data is multiword line
            if(ansck == 99)
            {
                console.log(ans(total_data[i]));
            }
            else
            {
                if(total_data[i].length != 0)
                {
                    temp_long = total_data[i].split(' ');
                    tempk = temp_long[0];
                    tempuk = temp_long[1];
                    create_dictionary(tempk, tempuk);
                }
                else ansck = 99;
            }
        } 
    }); 
}
if (require.main == module)
{
    if (process.argv.length > 2 && process.argv[2] === 'test') test();
    else get_data();    
}