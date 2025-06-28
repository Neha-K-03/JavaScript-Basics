/*
TASK 1
let i = 3;

while(i) {
    alert(i--);
}

Ans: 1
*/


/*
TASK 2
let i = 0;
while(++i < 5) {
    alert(i);
}

let i = 0;
while(i++ < 5) {
    alert(i);
}

Ans: 1, 2, 3, 4
     1, 2, 3, 4, 5
*/


/*
TASK 3
for(let i = 0; i < 5; i++) {
    alert(i);
}

for(let i = 0; i < 5; i++) {
    alert(i);
}

Ans: 0, 1, 2, 3, 4
     0, 1, 2, 3, 4
*/


/*
TASK 4
for(let i = 2; i <= 10; i++) {

    if(i % 2 == 0) {
        alert(i);
    }
}
*/


/*
TASK 5
let i = 0;

while(i < 3) {
    alert(`number ${i}!`);
    i++;
}
*/


/*
TASK 6
let num;

do {
    num = prompt("Enter a number greater than 100", "");
} while(num <= 100 && num);
*/



//TASK 7
let n = 10;

nextPrime:
for(let i = 2; i <= n; i++) {

    for(j = 2; j < i; j++) {
        if(i % j == 0) continue nextPrime;
    }

    alert(i);     //2, 3, 5, 7
}