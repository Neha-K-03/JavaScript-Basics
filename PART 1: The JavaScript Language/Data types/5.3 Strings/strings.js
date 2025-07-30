/*
TASK 1 
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
} 

alert( ucFirst("john") );     //John
*/


/*
TASK 2 
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}    

alert( checkSpam("buy ViAgRA now") );     //true
alert( checkSpam("free xxxxx") );     //true
alert( checkSpam("innocent rabbit") );     //false
*/


/*
TASK 3 
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength -1) + "..." : str;
}

let str = prompt("Enter a string? ");
let maxlength = 10;

alert( truncate(str, maxlength) );
*/


//TASK 4
function extractCurrencyValue(str) {
    return +str.slice(1);
}

let str = prompt("Enter a value?");
alert( extractCurrencyValue(str) );