//Block-scoped let
let counter = 0;
if (true) {
  let counter = 1; // Different variable
  console.log(counter); // 1
}
console.log(counter); // 0

//Temporal dead zone
function checkTDZ() {
  console.log(myVar); // ReferenceError
  let myVar = 5;
}

//const for constants
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant

//const with objects (mutable properties)
const person = { name: 'Alice' };
person.name = 'Bob'; // Allowed
// person = {}; // Not allowed

//Loop scoping with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}