// Obyekt va metodlar - this kalit so'zi
// Obyekt ichidagi funksiya "metod" deyiladi
// this => o'sha obyektning o'zini ko'rsatadi

const reception = {
    hotelName: 'IslambekHotel',
    checkedInRooms: 0,
    checkInRoom() {
        this.checkedInRooms++;
        return "XONA BAND QILINDI";
    }
};

console.log(reception.checkInRoom()); // XONA BAND QILINDI
console.log(reception.checkedInRooms); // 1
