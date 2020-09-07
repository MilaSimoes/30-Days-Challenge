let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');

red.addEventListener('click', redBg);
green.addEventListener('click', greenBg);
blue.addEventListener('click', blueBg);

function redBg() {
	document.body.style.backgroundColor = 'red';
}

function greenBg() {
	document.body.style.background = '#3BFF02';
}

function blueBg() {
	document.body.style.background = '#0666FA';
}