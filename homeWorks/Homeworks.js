// // 💻 Amaliy Mashq
// // VS Code-ni och. Quyidagi topshiriqni bajara oladigan script yoz:

// // islambekHotel nomli obyekt yarat. Unda mehmonxona nomi, manzili va rooms (massiv) bo'lsin.

// // rooms massivi ichida kamida 3 ta obyekt bo'lsin (har bir xonaning id, type, price va isBooked xususiyatlari bo'lishi shart).

// // for tsikli yordamida faqat bo'sh (isBooked: false) bo'lgan xonalarni konsolga chiqaz.

// // Foydalanuvchi kiritgan xona turiga qarab, uning narxini qaytaruvchi oddiy mantiq qo'sh.

// // ❓ Nazorat Savoli
// // JavaScript-da == va === operatorlarining farqi nimada va nega har doim === ishlatish tavsiya etiladi?

// // Javob:

// const islambekHotel = { 
//     name: `Islambek Hotel`,
//     location: `Khorezm`, 
//     room: [ 
//         { id: 1, type: `standart`, isBooked: true , price: 20},
//         { id: 2, type: `premium`, isBooked: false, price: 35 }, 
//         {id: 3, type: `Lux`, isBooked:false , price: 40 }
//     ]
// }

// for ( let i = 0 ; i < islambekHotel.room.length ; i++) { 
//     if (islambekHotel.room[i].isBooked === false) {
//         console.log(islambekHotel.room[i])
//     }
// }
// const userSearch = `Lux`; 

// for (let i = 0; i < islambekHotel.room.length ; i++ ) { 
//     if(islambekHotel.room[i].type === userSearch ) { 
//         console.log(`${userSearch} xonasining narxi ${islambekHotel.room[i].price}$`);
//     }
// }
// for (let i = 0 ; i < islambekHotel.room.length ; i++) { 
//     if (islambekHotel.room[i].isBooked ==false) {  
//         islambekHotel.room[i].isBooked = true,
//         console.log(`Xona muvaffaqiyatli band qilindi`)
//         break
//     }
// }

// let totalPrice = 0;
// for (let i=0 ; i < islambekHotel.room.length ; i++) { 
//     if(islambekHotel.room[i].price > 0) { 
//         totalPrice += islambekHotel.room[i].price; 
//     } 

// }
// console.log(totalPrice)

// for (let i = 0 ; i< islambekHotel.room.length ; i++) { 
//     if (islambekHotel.room[i].price < 30) { 
//         console.log(islambekHotel.room[i])
//     } 
// }

// 1. Bitta argument(Rant mashqi logikasi):

// function alertCleaning(roomNumber) {
//     for(let i = 0; i < 3 ; i++ ) {
//         console.log(`Diqqat ${roomNumber}-xona zudlik bilan tozalanishi kerak`.toUpperCase())
//     }
// }
// alertCleaning(2)

// 2. Bir nechta argumentlar(Multiple Args logikasi):

// function calculateStay(pricePerNight, nights, taxRate) { 
//     console.log((pricePerNight * nights)* taxRate)
// }

// // 3. Return mantiqi (isShortsWeather logikasi): 

// function isEligibleForDiscount(totalSpent) { 
//     if (totalSpent >= 500) { 
//         return true
//     }else { 
//         return false
//     }
// }

// 4. Massiv yig'indisi (Sum Array logikasi):

// function getDailyRevenue(pricesArray) { 
//     let total = 0;
//     for (let i = 0 ; i < pricesArray.length ; i++) { 
//         total += pricesArray[i]
//     }
//     return total
// }
// getDailyRevenue([10,5,4,1,5])

// 5. Oxirgi element va Capitalize(Last Element & Capitalize logikasi):

function formatLastGuest(guestsArray) { 
    if (guestsArray.length === 0) { 
        return null
    }
    let lastGuest = guestsArray[guestsArray.length - 1].at(0).toUpperCase() + guestsArray[guestsArray.length - 1].slice(1).toLowerCase()
    return lastGuest

}
formatLastGuest([`Salom`,`azaMat`,`gomma`])