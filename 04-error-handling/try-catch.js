// try/catch - xatolarni ushlash
// try blokida xato chiqsa, catch bloki ishlaydi va dastur to'xtamaydi

const islambekHotel = {
    name: 'Islambek Hotel',
    location: 'Khorezm',
    room: [
        { id: 1, type: 'standart', isBooked: true, price: 20 },
        { id: 2, type: 'premium', isBooked: false, price: 35 },
        { id: 3, type: 'Lux', isBooked: false, price: 40 }
    ]
};

function bookRoom(roomId) {
    try {
        if (typeof roomId !== 'number') {
            throw new Error("Noto'g'ri ID kiritildi");
        }
        for (let i = 0; i < islambekHotel.room.length; i++) {
            if (islambekHotel.room[i].id === roomId) {
                if (!islambekHotel.room[i].isBooked) {
                    islambekHotel.room[i].isBooked = true;
                    console.log(`${roomId}-xona muvaffaqiyatli band qilindi`);
                } else {
                    console.log(`${roomId}-xona allaqachon band`);
                }
                return;
            }
        }
        throw new Error(`${roomId} ID li xona topilmadi`);
    } catch (error) {
        console.log('Xato:', error.message);
    }
}

bookRoom(2);    // band qilindi
bookRoom(1);    // allaqachon band
bookRoom('a');  // Noto'g'ri ID
bookRoom(99);   // topilmadi
