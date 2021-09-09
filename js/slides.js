const myslide = document.querySelectorAll('.myslide'); //Obtiene todos elementos del HTML con la clase .mySlide
const next = document.getElementById("next"); //Obtiene el botón de siguiente por id
const prev = document.getElementById("prev");// Obtien el botón de anterior por id



/****************************CAMBIA DE SLIDES*************************************** */
let counter = init(); // Captura el valor de la página actual
counter = parseInt(counter); //Pasa  el valor de counter de string a entero
slidefun(counter); // Llama la función slide fun con parametro counter para cambiar de slide

function plusSlides(n) { //Recibe como parametro n de los botones para atrasar  o adelantar los slides
	counter += n; //Le aumenta o disminuye al contador para adelantar o retroceder
	slidefun(counter); //Llama la función slide fun con parametro counter para cambiar de slide
}

function currentSlide(n) { // Función que recibe la página actual y la envía a través de  la funcion slidefun
	counter = n; // counter recibe el parametro
	slidefun(counter); // Se envía counter a slide fun para pasar la página
}


function slidefun(n) { //Función para pasar el slide

	let i; //
	for (i = 0; i < myslide.length; i++) { //  For para recorrer todos los slides
		myslide[i].style.display = "none"; // Oculta los slides posición por posición
	}

	if (n >= myslide.length) { // Condicional para preguntar si está en la última página
		next.style.display = "none"; // Oculta el botón de siguiente
		completeStatusLesson(); // Envia el estado completado al SCORM
	} else {
		next.style.display = "block"; // Aparece el botón de siguiente
	}
	if (n <= 1) { //Condición para  validar si está en la primera página
		prev.style.display = "none"; // Oculta e botón de anteior si está en la primera página
	} else {
		prev.style.display = "block"; // Aparece el botón de anterior si no está en la primera página
	}
	myslide[counter - 1].style.display = "block"; // Aparece el slide actual

}



/***********************MENÚ*******************************************/

let nameSlides = []; //Crea un array
const titles = document.querySelectorAll('.title');


for (let i = 0; i < myslide.length; i++) {
	nameSlides[i] = titles[i].textContent;
}

const slideList = document.getElementById('slideList');
const fragment = document.createDocumentFragment();



for (const nameSlide of nameSlides) {
	const slideList = document.createElement('LI');
	slideList.textContent = nameSlide;
	fragment.appendChild(slideList);
}

console.log(fragment);
slideList.appendChild(fragment);

let li = document.getElementsByTagName("li");

for (let i = 1; i <= nameSlides.length; i++) {
	li[i - 1].classList.add("seccion", "seccion" + i);
}


const seccion = document.querySelectorAll('.seccion');

console.log(seccion);
let actual = 0;
for (let i = 0; i < nameSlides.length; i++) {
	seccion[i].addEventListener("click", function () {
		enviarPagina(i);
	});
}

function enviarPagina(i) {
	actual = i + 1;
	actual = parseInt(actual);
	console.log("Estoy enviando la pagina:" + actual);
	currentSlide(actual);
	countSlider = actual;
}


/**************************PORCENTAJE********************************/


next.addEventListener("click", siguiente);
prev.addEventListener("click", anterior);

/* let numSlides = myslide.length; */ //DIGITAR EL NÚMERO DE SLIDES
let countSlider = counter; // CONTADOR DE SLIDES

let porcentaje = 0;
let sliderAnterior = countSlider;

function siguiente() {

	if (countSlider < myslide.length) {

		countSlider++;
		console.log(countSlider);

		if (sliderAnterior > countSlider) {

		} else {
			sliderAnterior = countSlider;
			calcularPorcentaje();
		}
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
	porcentaje = porcentaje.toFixed(1);
	console.log(porcentaje);
	modifyScoreRaw(porcentaje);
}

