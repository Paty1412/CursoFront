

   const operando1 = parseFloat(prompt("Digite o primeiro número: "));
   const operando2 = parseFloat(prompt("Digite o segundo número: "));

    operador = prompt("Agora digite uma das operações (+, -, *, /): ");

    /* Verifica qual foi a operação selecionada */
    if (operador === '+') {
        resultado = operando1 + operando2;
    } else if (operador === '-') {
        resultado = operando1 - operando2;
    } else if (operador === '/') {
        resultado = operando1 / operando2;
    } else if (operador === '*') {
        resultado = operando1 * operando2;
    }


    
    alert('${operando1} ${operador} ${operando2} = ${resultado}');