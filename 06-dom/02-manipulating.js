// DOM - elementlarni o'zgartirish

// Matn o'zgartirish
document.querySelector('.third').innerText = 'salom';
let text = document.querySelector('.third').textContent;

// Style o'zgartirish
let header = document.querySelector(".header");
header.style.color = "red";

// Atributlar bilan ishlash
let imgSrc = document.querySelector("#thisID").src;
let atribut = document.querySelector('img').getAttribute('src');
document.querySelector('.third').setAttribute('class', "colorRed");

// Event listener - bosish hodisasi
let qizilTugma = document.getElementById('tugmaQizil');
qizilTugma.addEventListener('click', function () {
    qizilTugma.classList.toggle('colorBlack');
});

// Barcha <p> larni yashil qilish
let allP = document.querySelectorAll('p');
allP.forEach(p => {
    p.style.color = "green";
});
allP.forEach(p => {
    console.log(p.textContent);
});
