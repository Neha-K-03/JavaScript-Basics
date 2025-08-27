// TASK 3

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() );     // 0
alert( counter() );     // 1

alert( counter2() );     // 0
alert( counter2() );     // 1


// Second counter shows 0, 1.

// Functions "counter" and "counter2" are created by 
// different invocations of "makeCounter".
// So they have independent outer Lexical Environments,
// each one has it's own "count". 