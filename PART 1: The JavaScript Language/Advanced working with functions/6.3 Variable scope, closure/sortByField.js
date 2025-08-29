// TASK 9

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

alert( users.sort(byField("name")) );
/*
  { name: 'Ann', age: 19, surname: 'Hathaway' },
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' }
*/

alert( users.sort(byField("age")) );
/*
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
  { name: 'John', age: 20, surname: 'Johnson' }
*/