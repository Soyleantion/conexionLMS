/* var progreso = scorm.set("cmi.core.lesson_location",1);
progreso = scorm.get("cmi.core.lesson_location"); */

var scorm = pipwerks.SCORM;



/* consultaMostrarProgreso = empty(mostrarProgreso);
console.log (consultaMostrarProgreso); */


	// FUNCIÓN PARA INICIALIZAR EL CURSO RECIBE COMO PÁRAMETRO "MOSTRARPROGRESO"
	function init(){
		scorm.version = "1.2";
		Mensaje("Iniciando el Curso.");
		var callSucceeded = scorm.init();

		var probar = goToPage();

		Mensaje("Curso iniciado correctamente? " + callSucceeded + "Debería mostrar esta página:" + probar);
		return probar;
	}

	function CompletarCurso(){
		Mensaje("Marcando curso como Completado.");
		var callSucceeded = scorm.set("cmi.core.lesson_status", "completed");
		Mensaje("Curso Completado? " + callSucceeded);
	}

	function DescompletarCurso(){
		Mensaje("Marcando curso como Incompleto");
		var callSucceeded = scorm.set("cmi.core.lesson_status", "incomplete");
		Mensaje("Curso incompleto " + callSucceeded);
	}

	function ObtenerNombre(){
		var nombreUser = scorm.get("cmi.core.student_name");
		document.getElementById('Nombre').innerHTML = '<b>' + nombreUser + '</b>';
	}

	function ObtenerProgreso(){
		var progreso = scorm.get("cmi.core.lesson_status");
		alert (progreso);
	}
	function CambiarProgreso(){
		identificador=1;
		var progreso = scorm.set("cmi.core.lesson_location", countSlider);
		console.log ("progeso:" + progreso);
	}

	function MostrarProgreso(){
		var mostrarProgreso = scorm.get("cmi.core.lesson_location");
		console.log("Ultima página guardada:" + mostrarProgreso);
	}

	function end(){
		Mensaje("Conexion terminada.");
		var callSucceeded = scorm.quit();
		Mensaje("Termino correctamente? " +callSucceeded);
	}

	function Mensaje(msg){
		alert(msg);
	}

	function goToPage(){
		var paginaActual = scorm.get("cmi.core.lesson_location");
		console.log("Esto está mostrando página actual:   "+ paginaActual);

		/* paginaActual = 3; */
		if (paginaActual == 'null' || paginaActual == ''){
			console.log("BIENVENIDO AL CURSO POR PRIMERA VEZ:  true");
			paginaActual = 1;
		}
		else {
			let option = confirm("Desea reanudar el curso?");

			if (option == true){
			}

			else {
				paginaActual = 1;
				scorm.set("cmi.core.lesson_status", "incomplete");
			}
		}
		return paginaActual;

	}

	/* window.onload = function (){
		init();
	} */

	window.onunload = function (){
		end();
	}

