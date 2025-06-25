//Function returning a function
function multiplier(factor) {
  return num => num * factor;
}
const triple = multiplier(3);
console.log(triple(5)); // 15

//Function accepting a function (callback)
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // 0 1 2

//Array's map() as HOF
const numbers = [1, 2, 3];
const squares = numbers.map(x => x * x);
console.log(squares); // [1, 4, 9]

//Custom higher-order function
function logger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}
const errorLogger = logger("ERROR");
errorLogger("Something went wrong!"); // [ERROR] Something went wrong!

//Function composition
const add5 = x => x + 5;
const multiply3 = x => x * 3;
const compose = (f, g) => x => f(g(x));
const add5ThenMultiply3 = compose(multiply3, add5);
console.log(add5ThenMultiply3(2)); // 21