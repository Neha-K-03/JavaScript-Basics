// TASK 2

// Case 1
function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // Pete (worked!)

// It worked, because "User.prototype.constructor == User".


/*
// Case 2
function User(name) {
  this.name = name;
}
User.prototype = {};

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined
*/