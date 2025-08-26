// TASK 1

// using a for loop
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

alert( sumTo(100) );     // 5050


// using a recursion
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert( sumTo(100) );     // 5050


// using the formula: sumTo(n) = n*(n+1)/2
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert( sumTo(100) );     // 5050


// The formula is the fastest solution.
// Because it uses only 3 operations.

// The recursion is the slowest solution.
// Because it involves nested calls and execution stack management.

// No, we cannot safely use recursion to calculate sumTo(100000) in JavaScript.
// If the JavaScript engine does not support tail call optimization, 
// there will be an error: maximum stack size exceeded,
// because there's usually a limitation on the total stack size.