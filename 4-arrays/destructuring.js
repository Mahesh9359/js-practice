//Basic array destructuring
const [first, second] = [10, 20];
console.log(first); // 10

//Skipping items
const [,, third] = [1,2,3];
console.log(third); // 3

//Rest pattern
const [head, ...tail] = [1,2,3,4];
console.log(tail); // [2,3,4]

//Default values
const [a = 1, b = 2] = [undefined, 5];
console.log(a); // 1 (default used)

//Swapping variables
let x = 1, y = 2;
[x, y] = [y, x]; // x=2, y=1