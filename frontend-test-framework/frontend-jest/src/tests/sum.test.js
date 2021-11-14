// Will get 'SyntaxError: Cannot use import statement outside a module'
// if use ES6 import syntax 
// import sum from './sum';
const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
