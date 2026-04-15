// Qoidalar:

// Hamma mashqni faqatgina Arrow Function(=> ) yordamida yoz.function degan so'z ishlatilmasin.

// Har bir mashqning natijasini bitta o'zgaruvchiga tengla va darhol konsolga chiqar. (Masalan: const result1 = ... ; console.log(result1);).

// Javoblarni yig'ib bitta xabarda yuborasan.

// Boshladik:

// .map() orqali numbers massividagi barcha raqamlarni 2 ga ko'paytir va javobni saqla.

// .filter() orqali numbers massividan faqat 10 dan katta bo'lgan raqamlarni ajratib ol.

// .map() orqali numbers massividagi barcha raqamlarga 5 ni qo'shib, yangi massiv yarat.

// .filter() orqali numbers massividan faqat juft raqamlarni top(Kichik hiyla: Juft ekanligini raqam % 2 === 0 orqali tekshirasan).

// .map() orqali names massividagi barcha ismlarni katta harflarga(UpperCase) o'gir.

// .filter() orqali names massividan faqat uzunligi(.length) 4 ga teng yoki undan kichik bo'lgan ismlarni ajrat.

// .map() orqali names massividagi har bir ismning oxiriga "bek" qo'shimchasini qo'shib yangi massiv yarat(Masalan: "Alibek").

// .filter() orqali names massividan aynan "Guli" ga teng BO'LMAGAN (!==) barcha ismlarni ajratib ol.

// .forEach() orqali names massivini aylanib, konsolga shunchaki "Salom, [ism]" deb chiqar(Yangi massiv yaratmaysan, to'g'ridan - to'g'ri konsol).

// .filter() orqali numbers massividan 5 ga qoldiqsiz bo'linadigan raqamlarni top (raqam % 5 === 0).
const numbers = [2, 5, 8, 10, 15, 20];
const names = ["Ali", "Vali", "Guli", "Murod", "Samir"];

const map1 = numbers.map(a => a*2); 

const filter1 = numbers.filter( a => a>10 )

const map2 = numbers.map(a => a +5)

const filter2 = numbers.filter( a => a % 2 === 0)

const map3 = names.map(a => a.toUpperCase())

const filter3 = names.filter( a => a.length > 4)

const map4 = names.map(a => a +`bek`)

const filter4 = names.filter(a => a !==`Guli`)

names.forEach( a => console.log(`Salom, ${a}`))  

const filter5 = numbers.filter( a => a % 5 === 0 )

console.log(filter5)