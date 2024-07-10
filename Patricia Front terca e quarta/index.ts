//const numero1= Number(prompt("Digite o primero numero:"));//
//const numero2= Number(prompt("Digite o segundo numero:"))//
//console.log(numero1 + numero2);//

const peso = Number(prompt("Digite seu peso atual:"));
const altura = Number(prompt("Digite sua altura"));

const imc = (peso / altura **2).toFixed(2);
alert(imc);
