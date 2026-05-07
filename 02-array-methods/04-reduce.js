// reduce() - massivni bitta qiymatga "qisqartiradi"
// (accumulator, currentValue) => newAccumulator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Yig'indi
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('Yig\'indi:', sum);

// Minimum qiymat
const min = numbers.reduce((acc, cur) => (acc < cur ? acc : cur));
console.log('Minimum:', min);

// Maximum qiymat
const max = numbers.reduce((acc, cur) => (acc > cur ? acc : cur));
console.log('Maximum:', max);
