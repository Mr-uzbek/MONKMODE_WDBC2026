
const islambekHotel = { 
    name: `Islambek Hotel`,
    location: `Khorezm`, 
    room: [ 
        { id: 1, type: `standart`, isBooked: true , price: 20},
        { id: 2, type: `premium`, isBooked: false, price: 35 }, 
        {id: 3, type: `Lux`, isBooked:false , price: 40 }
    ]
}

function bookRoom(roomId) { 
    try {
        if (typeof roomId !== 'number') { throw new Error("Noto'g'ri ID kiritildi"); } 
        else  { 
            
            for(let i = 0 ; i <islambekHotel.room.length ; i++) { 
                if(islambekHotel.room[i].id === roomId) { 
                    if (islambekHotel.room[i].isBooked === false) { 
                        islambekHotel.room[i].isBooked = true 
                        console.log(`Xona band qilindi`)
                        break
                    } else { 
                        console.log(`Xonqa allaqachon band qilingan`)
                    }
                }
            }
        } 
    } catch (error) {
        console.log(error.message)
    }
}
bookRoom(2)