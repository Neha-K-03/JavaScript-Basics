// TASK 1

let user = {
    name: "John Smith",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));

alert(user2);     // { name: 'John Smith', age: 35 }