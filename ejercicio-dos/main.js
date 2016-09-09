window.addEventListener("load", function () { 
	var boton = document.getElementById("empezar");
	boton.addEventListener("click", function() {
		var number = parseInt(document.getElementById("ingresarNumero").value);
		var signo = document.getElementById("signoIngresar").value;
		var arregloPrincipal = [];
		function multiplicacion(numero, signal) {
			for(var i = 1; i <= numero; i++){
				var arregloSecundario = [];
				for(var j = 1; j <= numero; j++){
					arregloSecundario.push(signal);
				}
				arregloPrincipal.push(arregloSecundario.join(" "));
			}
			var respuesta = document.getElementById("respuesta").innerHTML = arregloPrincipal.join("<br>");
			return arregloPrincipal;
		}
		multiplicacion(number, signo);
	});
});