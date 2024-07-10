const altura = Number(prompt("Digite sua altura:"));
const peso = Number(prompt("Digite seu peso:"));

const imc = peso / altura ** 2;
//alert(imc.toFixed(2));

if (imc < 18.5) {
  alert("Abaixo do peso normal");
} else if (imc >= 18.5 && imc < 24.9) {
  alert("Peso normal");
} else if (imc >= 24.9) {
  alert("Excesso de peso");
} else {
  alert("Catedoria não informada");
}

alert(imc.toFixed(2));



// sempre colocar em parenteses a condicional
//if (verificacao) {
// escopo do comando
//}
//const numTransformado = parseFloat(num);
