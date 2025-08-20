// TASK 3

// That's because map.keys() returns an iterable, but not an array.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);     // name, more