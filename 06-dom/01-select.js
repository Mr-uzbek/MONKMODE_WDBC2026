// DOM - elementlarni tanlash usullari

// ID bo'yicha (bitta element)
let standartDiv = document.getElementById("Standart");

// Tag nomi bo'yicha (HTMLCollection)
let allDivs = document.getElementsByTagName("div");

// CSS selector bo'yicha (bitta)
let firstP = document.querySelector("p");

// CSS selector bo'yicha (barchasi - NodeList)
let allP = document.querySelectorAll("p");
let allClasses = document.querySelectorAll(".class");
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Eng katta qiymatli <p> ni qizil qilish
let maxVal = 0;
allP.forEach(p => {
    if (maxVal < parseInt(p.innerText)) {
        maxVal = parseInt(p.innerText);
    }
});
allP.forEach(p => {
    if (maxVal === parseInt(p.innerText)) {
        p.style.color = "red";
    }
});
