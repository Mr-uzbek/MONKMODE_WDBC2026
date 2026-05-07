// map(), filter(), forEach() - aralash mashqlar
// Qoida: faqat Arrow Function ishlatilsin

const numbers = [2, 5, 8, 10, 15, 20];
const names = ["Ali", "Vali", "Guli", "Murod", "Samir"];

// 1. Barcha raqamlarni 2 ga ko'paytir
const doubled = numbers.map(n => n * 2);
console.log('2 ga ko\'paytirish:', doubled);

// 2. 10 dan katta raqamlar
const moreThan10 = numbers.filter(n => n > 10);
console.log('10 dan katta:', moreThan10);

// 3. Har bir raqamga 5 qo'sh
const plus5 = numbers.map(n => n + 5);
console.log('+5:', plus5);

// 4. Faqat juft raqamlar
const evens = numbers.filter(n => n % 2 === 0);
console.log('Juftlar:', evens);

// 5. Ismlarni katta harflarga
const uppercased = names.map(name => name.toUpperCase());
console.log('Katta harf:', uppercased);

// 6. Uzunligi 4 va undan kam ismlar
const shortNames = names.filter(name => name.length <= 4);
console.log('Qisqa ismlar:', shortNames);

// 7. Har bir ismga "bek" qo'shish
const withBek = names.map(name => name + 'bek');
console.log('"bek" li ismlar:', withBek);

// 8. "Guli" dan boshqa ismlar
const noGuli = names.filter(name => name !== 'Guli');
console.log('"Guli" siz:', noGuli);

// 9. Salom chiqarish (forEach - yangi massiv yo'q)
names.forEach(name => console.log(`Salom, ${name}`));

// 10. 5 ga qoldiqsiz bo'linadigan raqamlar
const multOf5 = numbers.filter(n => n % 5 === 0);
console.log('5 ga bo\'linadigan:', multOf5);
