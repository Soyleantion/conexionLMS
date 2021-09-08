const myslide = document.querySelectorAll('.myslide');
const next = document.getElementById("next");
const prev = document.getElementById("prev");



/******************************************************************* */
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

	if (n >= myslide.length) {
		next.style.display = "none";
		completeStatusLesson();
		/* counter = 1; */
	}else{
		next.style.display = "block";
	}
	if (n <= 1) {
		prev.style.display = "none";
		/* counter = myslide.length; */
	}else{
		prev.style.display = "block";
	}
	myslide[counter - 1].style.display = "block";

}



/***********************MENÚ****************************************** */

let nameSlides = [];

for (let i = 0 ; i < myslide.length ; i++){
	nameSlides[i] = i+1;
}

const slideList = document.getElementById('slideList');
const  fragment = document.createDocumentFragment();

for (const nameSlide of nameSlides){
    const slideList = document.createElement('LI');
    slideList.textContent = nameSlide;
    fragment.appendChild(slideList);
}
console.log(fragment);
slideList.appendChild(fragment);

let li = document.getElementsByTagName("li");
/* console.log (li[0]); */

/* li[0].classList.add("hola"); */


for (let i=1 ; i <= nameSlides.length ; i++){
    li[i-1].classList.add("seccion","seccion" + i);
}



const seccion = document.querySelectorAll('.seccion');

console.log(seccion);
let actual=0;
for (let i=0 ; i<nameSlides.length; i++){
	seccion[i].addEventListener("click", function(){ enviarPagina(i); });
}
//let actual  =  seccion[1].textContent; //Cambiar variable
//seccion[1].addEventListener("click", enviarPagina);
//actual = parseInt(actual);

//console.log(actual);

function enviarPagina(i){
	actual=i+1;
	actual= parseInt(actual);
	console.log("Estoy enviando la pagina:" + actual);
	currentSlide(actual);
}


/**************************PORCENTAJE********************************/


next.addEventListener("click", siguiente);
prev.addEventListener("click", anterior);

/* let numSlides = myslide.length; */ //DIGITAR EL NÚMERO DE SLIDES
let countSlider = counter; // CONTADOR DE SLIDES

let porcentaje = 0;
let sliderAnterior = countSlider;

function siguiente() {
	/* if (actual > 0){
		console.log("Estoy entrando?");
		countSlider = actual;
	}
	else{
		console.log("No estoy entrando");
	} */

	if (countSlider < myslide.length) {
		
		countSlider++;
		console.log(countSlider);


		if (sliderAnterior> countSlider){

		}else{
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
	
	/*  porcentaje = Math.trunc(porcentaje); */
	porcentaje = porcentaje.toFixed(1);
	console.log(porcentaje);
	
	modifyScoreRaw(porcentaje);
}