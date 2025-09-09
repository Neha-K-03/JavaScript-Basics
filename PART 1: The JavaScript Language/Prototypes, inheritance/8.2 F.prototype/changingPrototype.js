// TASK 1

// First one
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );

// The answer is true.
// The assignment to "Rabbit.prototype" sets up "[[Prototype]]" for new objects,
// but it does not affect the existing ones.


/*
// Second one
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats );

// The answer is false.
// Objects are assigned by reference.
// The object from "Rabbit.prototype" is not duplicated, 
// it’s still a single object referenced both by "Rabbit.prototype"
// and by the "[[Prototype]]" of "rabbit".
// So when we change its content through one reference,
// it is visible through the other one.


// Third one
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats );

// The answer is true.
// All "delete" operations are applied directly to the object. 
// Here "delete rabbit.eats" tries to remove "eats" property from "rabbit",
// but it doesn’t have it. 
// So the operation won’t have any effect.


// Fourth one
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats );

// The answer is undefined.
// The property "eats" is deleted from the prototype, 
// it doesn’t exist any more.
*/