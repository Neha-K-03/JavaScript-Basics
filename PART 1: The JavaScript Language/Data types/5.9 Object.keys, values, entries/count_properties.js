// TASK 2

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: "John",
    age: 30
};

alert( count(user) );     // 2