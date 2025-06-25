//Basic interpolation
const name = 'Alice';
console.log(`Hello ${name}!`); // Hello Alice!

//Multi-line strings
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;

//Expression evaluation
const a = 5, b = 10;
console.log(`The sum is ${a + b}`); // The sum is 15

//Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    `${result}${str}<mark>${values[i] || ''}</mark>`, '');
}
const highlighted = highlight`Hello ${name}, your score is ${100}`;

//Raw strings
console.log(String.raw`Line 1\nLine 2`); // Literal \n