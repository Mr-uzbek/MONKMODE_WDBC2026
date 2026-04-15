// 1 - Vazifa: (Map)

//     .map() va Arrow Function(=> ) yordamida islambekHotel.room massivini aylanib chiq.

// Original massivga teginmagan holda, har bir xonaning narxini 10 % ga oshirib(price * 1.10), yangi updatedRooms massiviga saqla va konsolga chiqar. (Kechagi ...car misolini esla).

const islambekHotel = {
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
}
const updatedRooms = islambekHotel.room.map((array) => { 
    return { 
        ...array, 
        price: array.price * 1.1
    }
})
console.log(updatedRooms)