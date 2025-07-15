/*
TASK 1
No difference
*/


/*
TASK 2
function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}


function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?");
}
*/


/*
TASK 3
function minimum(a, b) {
    if(a<b) {
        return(a);
    }
    else {
        return(b);
    }
}
*/



//TASK 4
function power(x, n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= x;
    }
    return(result);
}

let x = +prompt("x?", "");
let n = +prompt("n?", "");

if(n < 1) {
    alert(`Power ${n} is not supported, use a positive number`);
}

else {
    alert(power(x, n));
}