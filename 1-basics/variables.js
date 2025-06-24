//Using var
//function-scoped
//older way
var name = "Mahesh";
console.log(name);

//Using let
//block-scoped
//can be reassigned
let age = 22;
age = 23;
console.log(age);

//Using const 
//block-scoped
//cannot be reassigned
const PI = 3.14;
// PI=3.142;  <= This gives error because constant variables cannot be reassigned
console.log(PI);

//Declaring multiple variables
let a = 5, b = 10, c = 15;
console.log(a + b + c);

//Variable names should be in the camelCase
let firstName = "Mahesh";
let lastName = "Jadhav";
console.log(firstName, lastName); 