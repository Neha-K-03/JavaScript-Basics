/*
TASK 1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert(a + b);
*/


/*
TASK 2 
Internally the decimal fraction 6.35 is an endless binary.
As always in such cases, it is stored with a precision loss.

The precision loss can cause both increase and decrease of a number.
In this particular case, the number becomes a tiny bit less, that's why it rounded down.

alert( Math.round(6.35 * 10) / 10);     //6.4
*/


/*
TASK 3 
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    }while ( !isFinite(num) );

    if (num === null || num ==='') return null;
    
    return +num;
}

alert(`Read: ${readNumber()}`);
*/


/*
TASK 4 
That's because "i" would never equal "10".
Such things happen because of the precision losses when adding fractions.
So evade equality checks when working with decimal fractions.
*/


/*
TASK 5 
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
*/


//TASK 6
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );