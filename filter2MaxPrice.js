// 2 - Vazifa: (Filter)

// filterAffordableRooms(maxPrice) nomli Arrow funksiya yarat.

// U parametr sifatida maxPrice qabul qilsin va islambekHotel.room massivi ichidan narxi(price) shu summadan kichik yoki teng(<=) bo'lgan xonalarnigina .filter() orqali saralab return qilsin.

const islambekHotel = {
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
}
// result max price we needd with filter 
const maxPriceRoom = islambekHotel.room.filter( room => room.price === Math.max(...islambekHotel.room.map( r => r.price)))
