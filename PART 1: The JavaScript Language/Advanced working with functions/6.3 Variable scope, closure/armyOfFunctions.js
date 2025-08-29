// TASK 10

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            alert(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0]();     // 0
army[1]();     // 1
army[2]();     // 2


// First, all functions show the same value, 10.
// Because there's no local variable "i" inside "shooter" functions.
// When such a function is called, it takes "i" from it's outer lexical environment.