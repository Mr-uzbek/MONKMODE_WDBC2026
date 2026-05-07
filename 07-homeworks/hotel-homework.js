// Uy vazifalari - IslambekHotel
// Bu fayl barcha uy vazifalarini o'z ichiga oladi

const islambekHotel = {
    name: 'Islambek Hotel',
    location: 'Khorezm',
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
};

// 1. Bo'sh xonalarni konsolga chiqarish (for loop)
console.log('--- Bo\'sh xonalar ---');
for (let i = 0; i < islambekHotel.room.length; i++) {
    if (islambekHotel.room[i].isBooked === false) {
        console.log(islambekHotel.room[i]);
    }
}

// 2. Foydalanuvchi xona turi bo'yicha narx topadi
const userSearch = 'Lux';
for (let i = 0; i < islambekHotel.room.length; i++) {
    if (islambekHotel.room[i].type === userSearch) {
        console.log(`${userSearch} xonasining narxi ${islambekHotel.room[i].price}$`);
    }
}

// 3. Birinchi bo'sh xonani band qilish
console.log('--- Band qilish ---');
for (let i = 0; i < islambekHotel.room.length; i++) {
    if (islambekHotel.room[i].isBooked === false) {
        islambekHotel.room[i].isBooked = true;
        console.log(`${islambekHotel.room[i].type} xonasi muvaffaqiyatli band qilindi`);
        break;
    }
}

// 4. Jami narxni hisoblash
let totalPrice = 0;
for (let i = 0; i < islambekHotel.room.length; i++) {
    totalPrice += islambekHotel.room[i].price;
}
console.log('Jami narx:', totalPrice);

// 5. Narxi 30$ dan past xonalar
console.log('--- 30$ dan arzon ---');
for (let i = 0; i < islambekHotel.room.length; i++) {
    if (islambekHotel.room[i].price < 30) {
        console.log(islambekHotel.room[i]);
    }
}

// --- Funksiyalar bilan mashqlar ---

// 1. Xonani tozalash haqida xabar (bir argument)
function alertCleaning(roomNumber) {
    for (let i = 0; i < 3; i++) {
        console.log(`DIQQAT: ${roomNumber}-XONA ZUDLIK BILAN TOZALANISHI KERAK`);
    }
}
alertCleaning(2);

// 2. Qolish narxini hisoblash (bir nechta argument)
function calculateStay(pricePerNight, nights, taxRate) {
    return (pricePerNight * nights) * taxRate;
}
console.log('Jami to\'lov:', calculateStay(35, 3, 1.12));

// 3. Chegirma olish huquqi (return + shart)
function isEligibleForDiscount(totalSpent) {
    return totalSpent >= 500;
}
console.log('Chegirma bormi?', isEligibleForDiscount(600)); // true

// 4. Kunlik daromadni hisoblash (massiv yig'indisi)
function getDailyRevenue(pricesArray) {
    let total = 0;
    for (let i = 0; i < pricesArray.length; i++) {
        total += pricesArray[i];
    }
    return total;
}
console.log('Kunlik daromad:', getDailyRevenue([10, 5, 4, 1, 5]));

// 5. Oxirgi mehmonni formatlash (Capitalize)
function formatLastGuest(guestsArray) {
    if (guestsArray.length === 0) return null;
    const last = guestsArray[guestsArray.length - 1];
    return last[0].toUpperCase() + last.slice(1).toLowerCase();
}
console.log('Oxirgi mehmon:', formatLastGuest(['Salom', 'azaMat', 'gomma']));
