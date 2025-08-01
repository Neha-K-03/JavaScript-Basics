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
a,b,function() {
    alert( this );
}

We have a call of the function arr[2] as an object method.
Naturally, it receives "this" referencing the object "arr" and outputs the array.
*/


/*
TASK 4 
function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("A number please?", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert( sumInput() );
*/


//TASK 5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);

        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );     //5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );     //11
alert( getMaxSubSum([-2, -1, 1, 2]) );     //3
alert( getMaxSubSum([100, -9, 2, -3, 5]) );     //100
alert( getMaxSubSum([1, 2, 3]) );     //6
alert( getMaxSubSum([-1, -2, -3]) );     //0