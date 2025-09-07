// TASK 3

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test );


// The answer is undefined. 

// The result of bind is another object.
// It does not have the test property.