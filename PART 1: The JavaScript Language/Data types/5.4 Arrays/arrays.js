/*
TASK 1 
The result is 4.

Because arrays are objects. So both shoppingCart and fruits
are the references to the same array.
*/


/*
TASK 2 
let styles = ["Jazz", "Blues"];
alert( styles );     //Jazz,Blues

styles.push("Rock-n-Roll");
alert( styles );     //Jazz,Blues,Rock-n-Roll

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles );     //Jazz,Classics,Rock-n-Roll

styles.shift();
alert( styles );     //Classics,Rock-n-Roll

styles.unshift("Rap", "Reggae");
alert( styles );     //Rap,Reggae,Classics,Rock-n-Roll
*/


/*
TASK 3 
let arr = ["a", "b"];

arr.push(function () {
    alert( this );
});

arr[2]();

//We have a call of the function arr[2] as an object method.
//Naturally, it receives "this" referencing the object "arr" and outputs the array.
*/


/*
TASK 4 
let arr = [];
for (let item of arr) {
    arr[item] = prompt("Enter a value?", "");
}
*/