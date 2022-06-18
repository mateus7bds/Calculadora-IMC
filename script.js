function mostrarResultado(){
	let inAltura = document.getElementById("inAltura");
	let inPeso = document.getElementById("inPeso");
	let altura = Number(inAltura.value.replace(",", "."));
	let peso = Number(inPeso.value);
	if(altura == 0){
		alert("Por favor, digite sua altura...");
		inAltura.focus();
		return;
	}
	if(peso == 0){
		alert("Por favor, digite seu peso...");
		inPeso.focus();
		return;
	}
	let imc = peso / altura**2;
	let texto = "";
	if(imc < 18.5){
		texto += "Abaixo do peso";
	}else if(imc <= 24.9){
		texto += "Peso normal";
	}else if(imc <= 29.9){
		texto += "Sobrepeso";
	}else if(imc <= 34.9){
		texto += "Obesidade grau 1";
	}else if(imc <= 39.9){
		texto += "Obesidade grau 2";
	}else if(imc > 39.9){
		texto += "Obesidade grau 3";
	}
	let resultado = document.getElementById("resultado");
	resultado.style.display = "block";
	resultado.innerHTML = "";
	resultado.innerHTML = "IMC: " + imc.toFixed(1) + "<br>" + texto;
}
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarResultado);