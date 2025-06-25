//Array destructuring
const [first, second] = [1, 2, 3];
console.log(first); // 1

//Object destructuring
const { name, age } = { name: 'Alice', age: 30 };
console.log(name); // Alice

//Default values
const { theme = 'light' } = {};
console.log(theme); // light

//Nested destructuring
const { address: { city } } = { 
  address: { city: 'Paris' } 
};

//Parameter destructuring
function greet({ name, age }) {
  return `Hello ${name} (${age})`;
}
greet({ name: 'Bob', age: 25 });