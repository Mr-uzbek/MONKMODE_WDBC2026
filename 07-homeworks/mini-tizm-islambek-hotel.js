const islambekHotel = { 
    name: 'Islambek Hotel',
    location: 'Bishkek, Kyrgyzstan',
    rooms: [
        { id: 1, type: 'Standard', isBooked: false, price: 50 },
        { id: 2, type: 'Deluxe', isBooked: true, price: 80 },
        { id: 3, type: 'Suite', isBooked: false, price: 120 }

    ],
    amenities: ['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Restaurant', 'Bar'],
}
const roomList = document.querySelector('.room-list');

const availableRooms = islambekHotel.rooms.filter(room => !room.isBooked);

const addRoomtoList = (room) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${room.type} - $${room.price}`;
    roomList.appendChild(listItem);
}

availableRooms.forEach(addRoomtoList);



