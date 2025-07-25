/*
TASK 1 
An error.
Here the value of "this" inside makeUser() is undefined,
because it is called as a function,
not as a method with "dot" syntax.
*/


/*
TASK 2
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/


//TASK 3
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep() {
        alert( this.step );
        return this;
    }
};

ladder
    .up()
    .up()
    .down()
    .showStep()     //1
    .down()
    .showStep();     //0