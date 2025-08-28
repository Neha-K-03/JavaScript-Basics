// TASK 7

let x = 1;

function func() {
    console.log(x);     // Reference Error: Cannot access "x" before initialization

    let x = 2;
}

func();


// The result is an error.

// A variable technically exists, but can't be used before "let".