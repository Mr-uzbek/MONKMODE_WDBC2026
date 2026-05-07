// some()  - kamida BITTA element shartni qoniqtirsa TRUE qaytaradi
// every() - BARCHASI shartni qoniqtirsa TRUE qaytaradi

const numbers = [2, 4, 6, 8, 10];

const hasOdd = numbers.some(n => n % 2 !== 0);
console.log('Toq son bormi?', hasOdd); // false

const allEvens = nums => nums.every(n => n % 2 === 0);
console.log('Hammasi juftmi?', allEvens(numbers)); // true
console.log('Hammasi juftmi?', allEvens([1, 2, 4])); // false
