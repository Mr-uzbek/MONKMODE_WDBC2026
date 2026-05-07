// filter() - shartga mos kelgan elementlardan YANGI massiv yasaydi

const numbers = [2, 5, 8, 10, 15, 20];

// Faqat juft sonlar
const evens = numbers.filter(n => n % 2 === 0);
console.log('Juft sonlar:', evens);

// 10 dan katta sonlar
const bigNumbers = numbers.filter(n => n > 10);
console.log('10 dan katta:', bigNumbers);

// Foydalanuvchi nomlari: uzunligi 10 dan kam bo'lganlar
const validUserNames = usernames => usernames.filter(name => name.length < 10);

// Mehmonxona: narxi maxPrice dan arzon xonalar
const islambekHotel = {
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
};

const filterAffordableRooms = maxPrice =>
    islambekHotel.room.filter(room => room.price <= maxPrice);

console.log('35$ gacha xonalar:', filterAffordableRooms(35));

// Eng qimmat xonani topish
const maxPriceRoom = islambekHotel.room.filter(
    room => room.price === Math.max(...islambekHotel.room.map(r => r.price))
);
console.log('Eng qimmat xona:', maxPriceRoom);
