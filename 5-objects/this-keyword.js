// 1. Implicit binding
const car = {
  brand: 'Toyota',
  getBrand() {
    return this.brand;
  }
};
console.log(car.getBrand()); // Toyota

// 2. Explicit binding (call/apply)
function describe() {
  return `${this.color} ${this.type}`;
}
const bike = { color: 'Red', type: 'Mountain' };
console.log(describe.call(bike)); // Red Mountain

// 3. Constructor binding
function Person(name) {
  this.name = name;
}
const bob = new Person('Bob');
console.log(bob.name); // Bob

// 4. Arrow function lexical this
const counter = {
  count: 0,
  increment: () => {
    // Arrow functions don't have their own this
    console.log(this.count); // undefined (or window.count)
  }
};

// 5. bind() for permanent context
const boundDescribe = describe.bind(bike);
console.log(boundDescribe()); // Red Mountain