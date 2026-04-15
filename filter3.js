const islambekHotel = {
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
}

const filterAffordableRooms = (maxPrice) => {

    islambekHotel.room.filter()
    const filterAffordableRooms = (maxPrice) => {
        // Funksiya butun boshli natijani o'zidan tashqariga uzatishi (return) kerak:
        return islambekHotel.room.filter((xona) => {
            // Har bir xona uchun shu shart ishlaydi:
            return xona.price <= maxPrice;
        });
    }}
console.log(filterAffordableRooms(35));