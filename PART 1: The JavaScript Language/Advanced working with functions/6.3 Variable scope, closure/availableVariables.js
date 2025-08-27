// TASK 2

function makeWorker() {
    let name = "Pete";

    return function() {
        alert(name);     // Pete
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();


// It will show "Pete".
// The "work()" function in the code below gets "name" from the place
// of it's origin through the outer lexical environment reference.

// But if there were no "let name" in "makeWorker()", then the search would go
// outside and take the global variable as we can see from the chain above.
// In that case the result would be "John".