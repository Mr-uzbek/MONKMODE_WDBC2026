const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:

let rainbowColor = document.querySelectorAll('span');

for (let i = 0 ; i < rainbowColor.length ; i ++) {
    rainbowColor[i].style.color = colors[i];
}
console.log(rainbowColor.length)