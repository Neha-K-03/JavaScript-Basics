//without strict mode -> undefined
//with strict mode -> an error

let str = "Hello";

str.test = 5;

alert(str.test);