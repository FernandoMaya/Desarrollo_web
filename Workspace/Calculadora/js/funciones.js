function insertar (valor){
	document.querySelector('.pantalla').innerHTML +=valor;
}

function resultado(){
	p = document.querySelector('.pantalla');
	r = p.innerHTML;
	res = eval(r);
	p.innerHTML = res;
}

function borrar(){
	document.querySelector(".pantalla").innerHTML = "";
}
function borraruno(){
	// en p guardamos todo el objeto que es el div
	p = document.querySelector(".pantalla");
	// en valores guardamos lo que contiene el div
	valores = p.innerHTML;
	// en t guardamos el tamaño de valores
	t = valores.length;

	borrar();
	for(i = 0; i<t-1; i++){
		p.innerHTML += valores[i];

	}
}
// liga del lugar almacenado y revisar calculadora con estilos