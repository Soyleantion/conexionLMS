var scorm = pipwerks.SCORM;


	function init(){
		scorm.version = "1.2";
		Mensaje("Iniciando el Curso.");
		var callSucceeded = scorm.init();
		Mensaje("Curso iniciado correctamente? " + callSucceeded);
	}

	

	function CompletarCurso(){
		Mensaje("Marcando curso como Completado.");
		var callSucceeded = scorm.set("cmi.core.lesson_status", "completed");
		Mensaje("Curso Completado? " + callSucceeded);

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
		var progreso = scorm.set("cmi.core.lesson_location", "page5");
		console.log ("progeso:" + progreso);
		var mostrarProgreso = scorm.get("cmi.core.lesson_location");
		console.log(mostrarProgreso);
	}

	function end(){
		Mensaje("Conexion terminada.");
		var callSucceeded = scorm.quit();
		Mensaje("Termino correctamente? " +callSucceeded);
	}

	function Mensaje(msg){
		alert(msg);
	}

	window.onload = function (){
		init();
	}

	window.onunload = function (){
		end();
	}