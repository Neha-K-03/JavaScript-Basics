// TASK 6

function sum(a) {

    return function(b) {
        // takes "a" from the outer lexical environment
        return a + b;
    };
}

alert( sum(1)(2) );     // 3
alert( sum(5)(-1) );     // 4