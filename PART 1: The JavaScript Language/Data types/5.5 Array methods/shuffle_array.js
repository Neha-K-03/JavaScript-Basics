// TASK 10

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// counts of appearences for all possible permutations
let count = {
    "123": 0,
    "132": 0,
    "213": 0,
    "231": 0,
    "321": 0,
    "312": 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join("")]++;
}

for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

// Answer varies each time

/*
Ans:-
123: 166470
132: 166968
213: 167108
231: 166830
312: 166267
321: 166357
*/