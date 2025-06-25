//push/pop (modify end)
const fruits = ['apple'];
fruits.push('banana'); // ['apple', 'banana']
fruits.pop(); // ['apple']

//shift/unshift (modify start)
fruits.unshift('orange'); // ['orange', 'apple']
fruits.shift(); // ['apple']

//slice (non-mutating copy)
const numbers = [1,2,3,4];
const sliced = numbers.slice(1,3); // [2,3] (original unchanged)

//splice (mutating modify)
numbers.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4]

//includes/indexOf
console.log(fruits.includes('apple')); // true
console.log(numbers.indexOf('b')); // 2