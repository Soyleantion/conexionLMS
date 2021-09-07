const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", siguiente);
prev.addEventListener("click", anterior);

/* let numSlides = myslide.length; */ //DIGITAR EL NÚMERO DE SLIDES
let countSlider = 1; // CONTADOR DE SLIDES
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