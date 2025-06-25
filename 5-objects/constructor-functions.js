// 1. Basic constructor
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.getInfo = function() {
    return `${this.title} by ${this.author}`;
  };
}
const book1 = new Book('1984', 'Orwell');

// 2. Instance checking
console.log(book1 instanceof Book); // true

// 3. Multiple instances
const book2 = new Book('Dune', 'Herbert');

// 4. Constructor with defaults
function Product(name, price = 0) {
  this.name = name;
  this.price = price;
}

// 5. Prototype methods (better for memory)
Book.prototype.isClassic = function() {
  return this.author === 'Orwell';
};