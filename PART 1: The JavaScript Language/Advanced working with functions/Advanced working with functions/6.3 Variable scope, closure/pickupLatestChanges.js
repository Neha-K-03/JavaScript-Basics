// TASK 1

let name = "John";

function sayHi() {
    alert("Hi, " + name);     // Hi, Pete
}

name = "Pete";

sayHi();

// It will show "Pete".

// A function gets outer variables as they are now,
// it uses the most recent values.

// Old variable values are not saved anywhere.
// When a function wants a variable, it takes the current value
// from it's own Lexical Environment or the outer one.