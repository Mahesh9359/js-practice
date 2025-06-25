// 1. Object literal syntax
const person = {
  name: 'Alice',
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};
console.log(person.greet()); // Hello, I'm Alice

// 2. Dynamic property names
const key = 'email';
const user = {
  [key]: 'alice@example.com' // Computed property name
};

// 3. Object methods shorthand
const shop = {
  items: ['apple', 'banana'],
  addItem(item) { // Method shorthand
    this.items.push(item);
  }
};

// 4. Object iteration
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// 5. Object destructuring
const { name, age } = person;
console.log(name, age); // Alice 30