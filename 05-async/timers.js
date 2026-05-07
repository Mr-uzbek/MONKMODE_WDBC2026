// Asinxron JS - setTimeout va setInterval
// setTimeout  => bir marta, berilgan vaqtdan keyin ishlaydi (millisekund)
// setInterval => har X millisekunda qayta-qayta ishlaydi

// Bir marta, 3 sekunddan keyin
setTimeout(() => {
    console.log('3 soniyadan keyin salom!');
}, 3000);

// Har 1 sekundda (sekundomer)
let count = 0;
const timer = setInterval(() => {
    count++;
    console.log(`${count} soniya o'tdi`);
    if (count >= 5) {
        clearInterval(timer); // to'xtatish
        console.log('Taymer to\'xtatildi');
    }
}, 1000);
