const islambekHotel = { 
    room: [
            { id: 1, type: `standart`, isBooked: true , price: 20},
            { id: 2, type: `premium`, isBooked: false, price: 35 }, 
            {id: 3, type: `Lux`, isBooked:false , price: 40 }
        ]
}

const updatedRooms = islambekHotel.room.map((a) => {
    return { 
        ...a,
        price: a.price * 1.10
    }
})

console.log(updatedRooms)