let standartDiv = document.getElementById("Standart");

let all = document.getElementsByTagName("div");

let klaslar = document.querySelectorAll(".class");

let aa = document.querySelectorAll("p");

let expesso = 0 ; 


for (let i = 0; i < aa.length; i++) { 
    if (expesso < parseInt(aa[i].innerText)) {
        expesso = parseInt(aa[i].innerText);
    }
}

for ( let min of aa ) { 
    if (expesso === parseInt(min.innerText)) {
        min.style.color = "red";
    }
}

let qoida = document.querySelectorAll('input[type="checkbox"]')


