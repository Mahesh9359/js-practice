//Named exports (math.js)
export const PI = 3.14159;
export function square(x) { return x * x; }

//Default export (logger.js)
export default function(message) {
  console.log(message);
}

//Importing named exports
import { PI, square } from './math.js';

//
// Importing default export
import logger from './logger.js';

//Dynamic imports
async function loadModule() {
  const module = await import('./module.js');
  module.doSomething();
}