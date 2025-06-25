//Basic callback example
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}
processUserInput(name => console.log(`Hello, ${name}!`)); // Hello, Alice!

//Error-first callback (Node.js style)
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"), null);
  } else {
    callback(null, a / b);
  }
}
divide(10, 2, (err, result) => {
  if (err) console.error(err);
  else console.log(result); // 5
});

//Callback in array method
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2 4 6

//Asynchronous callback (setTimeout)
setTimeout(() => console.log("This runs after 2 seconds"), 2000);

//Event listener callback
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});