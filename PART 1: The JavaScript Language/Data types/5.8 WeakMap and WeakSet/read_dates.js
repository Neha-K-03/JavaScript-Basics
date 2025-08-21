// TASK 2

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

// Date is a object
readMap.set(messages[0], new Date(2017, 1, 1));

alert(readMap.get(messages[0]));     // 2017-02-01T00:00:00.000Z
// Jan - 0, Feb -1, Mar - 3, etc...