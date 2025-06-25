// 1. Basic ternary
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes

//Ternary in function return
function isEven(num) {
    return num % 2 === 0 ? true : false;
}
console.log(isEven(4)); // true

//Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // B

//Ternary for assignment
let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Wear sunglasses";
console.log(action); //Take an umbrella

//Ternary for logging (short-circuit)
let name = "Alice";
name === "Alice" ? console.log("Hello Alice!") : console.log("Who are you?");//Hello Alice!