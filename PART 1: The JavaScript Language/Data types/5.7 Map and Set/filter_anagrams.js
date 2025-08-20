// TASK 2

function aclean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        // split the word by letters
        // sort them and join back
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }

    return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", 
    "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );     // PAN, hectares, era