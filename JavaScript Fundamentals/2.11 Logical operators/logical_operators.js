/*
TASK 1
alert(null || 2 || undefined);

Ans: 2
*/


/*
TASK 2
alert(alert(1) || 2 || alert(3));

Ans: first 1, then 2
*/


/*
TASK 3
alert(1 && null && 2);

Ans: null
*/


/*
TASK 4
alert(alert(1) && alert(2));

Ans: first 1, then undefined
*/


/*
TASK 5
alert(null || 2 && 3 || 4);

Ans: 3
*/


/*
TASK 6
if(age >= 14 && age <= 90)
*/


/*
TASK 7
if(!(age >= 14 && age <= 90))
    
if(age < 14 || age > 90)
*/


/*
TASK 8
if(-1 || 0){
    alert("First");
}
if(-1 && 0){
    alert("Second");
}
if(null || -1 && 1){
    alert("Third");
}

Ans: First, Third
*/


//TASK 9
let username = prompt("Username", "");
if(username === "Admin"){
    let password = prompt("Password", "");

    if(password === "TheMaster"){
        alert("Welcome!");
    }

    else if(password === ""  || password === null){
        alert("Canceled");
    }

    else{
        alert("Wrong password");
    }
}

else if(username === "" || username === null){
    alert("Canceled");
}

else{
    alert("I don't know you");
}