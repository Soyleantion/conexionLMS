/**************************PORCENTAJE********************************/
const myslide = document.querySelectorAll('.myslide');


const next = document.getElementById("next");
const prev = document.getElementById("prev");
next.addEventListener("click", siguiente);
prev.addEventListener("click", anterior);

let counter = init();
counter = parseInt(counter);
slidefun(counter);

/* let timer = setInterval(autoSlide, 30000); */

/* function autoSlide() {
	counter += 1;
	slidefun(counter);
} */

function plusSlides(n) {
	counter += n;
	slidefun(counter);
	/* resetTimer(); */
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	/* resetTimer(); */
}

/* function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 30000);
}
 */
function slidefun(n) {

	let i;
	for (i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}

	if (n > myslide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";

}

/**************************PORCENTAJE********************************/


/* let numSlides = myslide.length; */ //DIGITAR EL NÚMERO DE SLIDES
let countSlider = counter; // CONTADOR DE SLIDES
let porcentaje = 0;
let porcentajeActual = 0;

function siguiente() {
	if (countSlider < myslide.length) {
		countSlider++;
		console.log(countSlider);
		calcularPorcentaje();
	}
}
function anterior() {
	if (countSlider > 0) {
		countSlider--;
		console.log(countSlider);

	}
}
function calcularPorcentaje() {
	porcentaje = (countSlider * 100) / myslide.length;
	/*  porcentaje = Math.trunc(porcentaje); */
	porcentaje = porcentaje.toFixed(1);
	console.log(porcentaje);
}


