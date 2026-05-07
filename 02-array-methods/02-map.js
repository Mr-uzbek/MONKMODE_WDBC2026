// map() - har bir elementni o'zgartirib YANGI massiv qaytaradi
// Original massivga tegmaydi

// Misol 1: Ism-familiyalardan faqat ismlarni olish
const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }
];

const firstNames = fullNames.map(person => person.first);
console.log(firstNames);

// Misol 2: Mehmonxona xonalari narxini 10% oshirish
const islambekHotel = {
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
};

const updatedRooms = islambekHotel.room.map(room => ({
    ...room,
    price: room.price * 1.1
}));

console.log(updatedRooms);
