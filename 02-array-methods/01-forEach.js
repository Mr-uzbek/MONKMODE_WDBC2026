// forEach() - massiv elementlarini birma-bir aylanib chiqish
// Yangi massiv yaratmaydi, faqat har bir elementga biror amal bajaradi

const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (el) {
    console.log(el);
});

// Arrow function bilan:
arr.forEach(el => console.log(el));
