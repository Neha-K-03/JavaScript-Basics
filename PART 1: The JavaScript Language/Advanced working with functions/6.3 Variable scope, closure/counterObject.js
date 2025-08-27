// TASK 4

function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };

    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

alert( counter.up() );     // 1
alert( counter.up() );     // 2
alert( counter.down() );     // 1


// It will work.
// Both nested functions are created within the same outer Lexical Environment,
// so they share access to the same "count" variable.