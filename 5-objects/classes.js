// 1. Basic class
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

// 2. Static methods
class MathUtils {
  static square(x) {
    return x * x;
  }
}

// 3. Class inheritance
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// 4. Getters/Setters
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
}

// 5. Private fields (ES2022)
class Wallet {
  #balance = 0; // Private field
  deposit(amount) {
    this.#balance += amount;
  }
}