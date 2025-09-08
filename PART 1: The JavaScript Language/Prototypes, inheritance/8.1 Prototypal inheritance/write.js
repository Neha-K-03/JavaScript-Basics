// TASK 3

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();


// The answer is rabbit.
// That’s because this is an object before the dot, 
// so rabbit.eat() modifies rabbit.