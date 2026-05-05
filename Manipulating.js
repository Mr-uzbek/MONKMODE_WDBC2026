let header = document.querySelector(".header")

let paragrapht = document.querySelector('.paragraph')
let colorChanger = function(a) { 
a.style.color = "red";
}
let text = document.querySelector('.third').innerText = 'salom';
colorChanger(header);

let text1 = document.querySelector('.third').textContent;

let idChenger = document.querySelector("#thisID").src;

let atributs = document.querySelector('img').getAttribute('src');



let setatributs = document.querySelector('.third').setAttribute('class' , "colorRed");

let qizilTugma = document.getElementById('tugmaQizil')

	qizilTugma.addEventListener('click', function(){
		document.getElementById('tugmaQizil').classList.toggle('colorBlack');
	});

let allP = document.querySelectorAll('p');

	allP.forEach(function(p){
		p.style.color ="green";
	});

	allP.forEach(function(p){ 
		console.log(p.textContent)
	});