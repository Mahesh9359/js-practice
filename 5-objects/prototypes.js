// 1. Prototype chain
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

// 2. Inheritance
function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);

// 3. Method override
Dog.prototype.speak = function() {
  return `${this.name} barks`;
};

// 4. Checking prototypes
const spot = new Dog('Spot');
console.log(spot instanceof Animal); // true

// 5. Object prototype
console.log(Object.getPrototypeOf(spot) === Dog.prototype); // true