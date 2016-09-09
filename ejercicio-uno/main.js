window.addEventListener("load", function () { 
	var boton = document.getElementById("empezar");
	boton.addEventListener("click", function() {
		var number = parseInt(document.getElementById("ingresarNumero").value);
			var arreglo = [];
			for(var i = 1; i <= number; i++){
				arreglo.push(i);
			}
		var secuencia = document.getElementById("secuenciaNumeros").innerHTML = arreglo;
	});
});
