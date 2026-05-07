// DOM + for loop - kamalak ranglari
// Har bir <span> ga rainbow rangi beriladi

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let spans = document.querySelectorAll('span');

for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i];
}
