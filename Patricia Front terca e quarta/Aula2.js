//string aula 02 //exercicio 01:Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. Em seguida, exiba o conteúdo da variável "nome" no terminal

let nome = "Patricia"
console.log(nome);

// Exer.02: Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba o
//comprimento da string armazenada na variável "frase"

let frase = "A verdade sempre prevalecerá"
console.log(frase.length) //length conta as letras inclusive os espaços

//Exer.03: Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, exiba a primeira letra da palavra armazenada na variável "palavra"

let palavra= "Amor"
console.log(palavra[0]) 

//exer.04 Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba a frase em letras maiusculas.

let frase1= " O procura pelo aprendizado nunca será desnecessário"
console.log(frase1.toUpperCase()); //Touppercase coloca as letras minúsculas em maiúsculas

//exer.05Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. Em seguida,sobrescreva o valor da variável para um outro endereço e 
//verifique no terminal o valor atual da variável.

let endereco= "Rua Dom Pedro"
endereco= "Rua Nivaldo de Cristo Lobo"
console.log(endereco)

//Integer e float. //exer.01: Declare uma constante chamada" PI" e atribua a ela o valor de 3.14159.

const PI= 3.14159;

//exer.02:Declare uma nova variável chamada "y" e atribua a ela o valor da constante "PI"

let y = Math.PI;
console.log(PI)

//exer.03. Declare uma constante chamada "taxaJuros" e atribua a ela o valor de 0.05, representando uma taxa de juros de 5%.

let taxadeJuros= 0.05*100
console.log(taxadeJuros + "%")

//exer04:Declare duas variáveis "x" e "y" e atribua para elas valores inteiros
let a = 10
let b = 5

//exer.05:Exiba no terminal a "soma" dessas duas variáveis
console.log (a+b)

//exer06:Exiba no terminal a "subtração,multiplicaçao e divisão" dessas duas variáveis
console.log(a-b)
console.log(a*b) //exer07
console.log(a/b) //exer08

//Boolean: exer.01: Crie uma variável chamada "estaChovendo" e atribua a ela o valor booleano que indica se está chovendo ou não

let estaChovendo = "booleano"


//exer.02 Declare uma variável chamada "verdadeiro" e atribua a ela o valor booleano true

let verdadeiro = "true"
let falso = "falso"
console.log("true") //exer.02
console.log("falso") //exer.03
console.log(verdadeiro==falso)//exer.04

//exer.05: Declare uma variável chamada "temperatura" e atribua a ela um valor numérico representando a temperatura atual.
//Em seguida, verifique e exiba no terminal se esta temperatura é maior que 30graus Celsius.
 let temperatura = 29
 console.log(temperatura < 30)

 //exer06: Declare uma variável chamada "resultado" e atribua a ela o valor booleano resultante da comparação "10 > 5". 
 //Em seguida, exiba o valor da variável resultado no terminal.

 let resultado = 10 > 5
 console.log(resultado)

 //exer.07: Declare uma variável chamada "teste" e atribua a ela o valor booleano resultante da comparação"25 < 15". 
 //Em seguida, exiba o valor da variável resultado no terminal

 let teste= 25 < 15
 console.log(teste)

 //Objeto exr.01:Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas.
  let pessoa = {
    
    nome: "Bob Bastos",
    idade: 3,
    idade:4, // atribuir nova idade. Exer.04
    endereço: "Rua das Crioulas",
    profissão: "cuidador",
    profissão1: "medico" //exer.03 Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela
 

};
  
  console.log( pessoa)
  console.log(pessoa.nome) //exer.2 Acesse o valor da propriedade "nome" do objeto "pessoa" ou console.log (pessoa["nome"])
  
  // exer.05: Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas.
  
  let animal = {

    nome: "Luna",
    especie: "canina",
    cor: "Branca com marrom"
  
};

console.log(animal)

//exer.06: Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas.
let livro = {
    
    titulo:"Livro dos espíritos",
    autor: "Alan Cardec",
    ano:1940,
    ano:1950 //08:Atualize o valor da propriedade "ano" do objeto livro para um novo valor
};

delete livro.titulo; //Exclua a propriedade "titulo" do objeto utilizando o operador "delete"

console.log(livro)
console.log(livro["autor"]) //07: Acesse o valor da propriedade "autor" do objeto livro

//exer.10 Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. Em seguida, exiba todas as propriedades do objeto no console.

let carro ={
    
    marca: "BMW",
    modelo: "IX M60",
    modelo1: "undefinid", //exer.11.Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as propriedades do objeto no console.
    ano: 2024

}

console.log(carro)

//Outros tipos de variáveis exer:01. Declare uma variável chamada "variavelNull" e atribua a ela o valor nulo ("null").

let variavelNull= ("null")
console.log(variavelNull)


//02. Declare uma variável chamada "variavelUndefined" e não atribua nenhum valor a ela.
let variavelUndefined
console.log(variavelUndefined)
console.log(variavelNull=== null) //3. Verifique se a variável "variavelNull" é igual a "null".
console.log(variavelUndefined=== undefined) //4.Verifique se a variável "variavelUndefined" é igual a "undefined".

//05.Atribua o valor "undefined" a uma propriedade chamada "nome" de um objeto vazio.

let objeto = {};

objeto.nome = undefined;

console.log(objeto);

//Array: exer.1: Crie um array vazio chamado "numeros"
let numero = [];
console.log(numero)

//02: Adicione os números 1, 2, 3 e 4 ao array "numeros".

let numeros = [1,2,3,4];
let segundoElemento = numeros [1]  //exer.3 segundo elemento
console.log(numeros)
console.log(segundoElemento) 

 //exer.4 Atualize o valor do terceiro elemento do array "numeros" para 10.
 let num = [1,2,3,10,5]
 let terceiroElemento = num[3]
 console.log(terceiroElemento)
 num.pop() // exer.05 Remova o último elemento do array "numeros" utilizando a função ".pop"
 console.log(num)

 //exer. 06:Verifique o comprimento do array "numeros".

 let nume = [1,2,3]
 let comprimento = nume.length
 console.log(comprimento)

 //07.Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".

 let frutas= ["maçã"," banana","laranja","uva"]
 let primeiroElemento= frutas[1]    
 console.log(primeiroElemento) //08.Acesse o valor do primeiro elemento do array frutas.
 
 let fruta = ["uva","goiaba"];
 
 fruta.push ("uva");  //09.Adicione a string "uva" ao final do array frutas utilizando a função ".push".
 console.log (fruta);

 //10: Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
 //Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.

 let aluno = {
 
    nomee: "João",
    escola: "Menino Jesus",
    idade: 25,
    Turno: 10 , 
    serie: 5
 
};

 let alunos =[] //11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos"

 alunos.push(aluno);
 console.log(aluno);
 let nomeAluno= alunos [0].nomee;
 console.log(nomeAluno);
 let idadeAluno= alunos [0].idade;
 console.log(idadeAluno);

 //13.Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no terminal apenas os produtos que ficaram em posições pares.
                //0         1       2       3       4   5           6         7     8       9        10
 let produtos= ["Feijão","arroz","carne","café","sal","biscoito","torrada","pão","queijo","cebola","Macarrão"];

 for (let i = 0; i < produtos.length; i += 2) { //se ao invés de colocar no indice:i o número 1 irá contar os números ímpares
    
    console.log(produtos[i]);
 
}

 
//Typeof
//1. Crie uma variável chamada "numero" e atribua a ela um número qualquer. Verifique o tipo de dado dessa variável usando "typeof".

let numeero = 30
console.log(typeof numeero)

let Nomee = "Dani Alexssander" //2.Crie uma variável chamada "texto" e atribua a ela uma string qualquer. Verifique o tipo de dado dessa variável usando "typeof
console.log(typeof Nomee) 

 let booleano = "true"  //3. Crie uma variável chamada "booleano" e atribua a ela um valor booleano ("true" ou "false").
 console.log(typeof booleano)  //Verifique o tipo de dado dessa variável usando "typeof".

 //4. Crie uma variável chamada "array" e atribua a ela um array vazio. Verifique o tipo de dado dessa variável usando "typeof".

 let carros= []
 console.log (typeof [])

 //5. Crie uma variável chamada "objeto" e atribua a ela um objeto vazio. Verifique o tipo de dado dessa variável usando "typeof"

 let objetos = {};
 console.log(typeof objetos);

 // 6. Crie uma variável chamada "nulo" e atribua a ela o valor nulo ("null"). Verifique o tipo de dado dessa variável usando typeof.
//7. Crie uma variável chamada "indefinido" sem atribuir nenhum valor. Verifique o tipo de dado dessa variável usando "typeof".

let nulo ="null"
console.log(typeof nulo)
let indefinido;
console.log(typeof indefinido)

//Operadores lógicos
//01. Utilizando a função "console.log", verifique se dois números são iguais utilizando o operador deigualdade ("==").
let c=12
let v= 10
console.log( c == v)
console.log( c != v) //Utilizando a função "console.log", verifique se dois números são diferentes utilizando o operador de diferença ("!=").
console.log (c > v) // 03 maior.
console.log (c < v) // 04 menor.
console.log (c >= v) //05 maior  ou igual
console.log( c <= v) //06. menor ou igual

// 07. Utilizando a função "console.log", verifique se duas condições são verdadeiras utilizando ooperador lógico AND ("&&").
let anos= 17
let possuiCarteira= true
console.log(anos >= 18 && possuiCarteira)

//08. Utilizando a função "console.log", verifique se pelo menos uma das condições é verdadeira utilizando o operador lógico OR ("||")
let temCasa= false
let naotemCasa= true

console.log(temCasa || naotemCasa)

//09. Utilizando a função "console.log", negue uma condição utilizando o operador lógico NOT ("!").
let Ama= false
console.log (!Ama)

//10. Utilizando a função "console.log", verifique se um número está dentro de um determinado
//intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<=").
let numeroS = 15;
let intervaloMin = 10;
let intervaloMax = 20;

console.log(numeroS<= intervaloMin && numeroS >= intervaloMax);
console.log(numeroS> intervaloMin || numeroS < intervaloMax) //11. Utilizando a função "console.log", verifique se um número está fora de um determinado intervalo,
//utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">")

//12.Utilizando a função "console.log", verifique se um número é positivo, utilizando o operador de 
//maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero.

let numeross= 0;
console.log(numeross > 0)

//13. 13. Utilizando a função "console.log", verifique se uma string é vazia, utilizando o operador de
//igualdade ("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a zero.
let minhaString = '';

console.log(minhaString == " ");
console.log(minhaString.length == 0);

//14. Utilizando a função "console.log", verifique se uma variável é do tipo booleano, utilizando o
//operador "typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a"boolean".

let meuMundo= false
console.log(typeof meuMundo == "boolean")