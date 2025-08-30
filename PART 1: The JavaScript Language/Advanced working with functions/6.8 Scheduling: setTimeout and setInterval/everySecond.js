// TASK 1

// using setInterval
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        alert(current);     // 5 6 7 8 9 10
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);


// using nested setTimeout
function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);     // 5 6 7 8 9 10
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);