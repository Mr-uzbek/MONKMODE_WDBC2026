const  reception ={
    hotelName: 'IslambekHotel',
    checkedInRooms: 0,
    checkInRoom() { 
        this.checkedInRooms++ 
        return "XONA BAND QILINDI"
    }
}

reception.checkInRoom()
    