const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');



hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#000000';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

window.addEventListener('scroll', function(){
	let animacion = this.document.getElementById('animacion');
	let posicionObj1 = animacion.getBoundingClientRect().top;
	let tamañoDePantalla = window.innerHeight/5;
	/* console.log(posicionObj1) */
	if(posicionObj1 < tamañoDePantalla){
		animacion.style.animation = 'desplazar2 1.5s '
	}
	
})

window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'top',
    distance: '-500px'
});
window.sr = ScrollReveal();
  sr.reveal('.navbar2', {
    duration: 3000,
    origin: 'left',
    distance: '-500px'
});

window.sr = ScrollReveal();
  sr.reveal('.navbar3', {
    duration: 3000,
    origin: 'bottom',
    distance: '-500px'
});

window.sr = ScrollReveal();
  sr.reveal('.navbar4', {
    duration: 3000,
    origin: 'right',
    distance: '-500px'
});


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});






window.addEventListener('load', () => {
	const contenedor_loader = document.querySelector('.contenedor_loader')
	contenedor_loader.style.opacity = 0
	contenedor_loader.style.visibility = 'hidden'

}) 

document.addEventListener('DOMContentLoaded', function () {
  let figure = document.getElementById('photo');
  let directions = document.getElementById('directions');

  directions.addEventListener('change', function () {
    figure.setAttribute('tooltip-dir', this.value);
  });
});


