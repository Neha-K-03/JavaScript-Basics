// TASK 1

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

alert( counter() );     // 0  (first call)
alert( counter() );     // 1  (second call)

counter.set(10);     // set count = 10
alert( counter() );     // 10  (check again)

counter.decrease();     // decrease count
alert( counter() );     // 10  (final check)