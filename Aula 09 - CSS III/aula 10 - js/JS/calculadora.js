function calcular(operacao){
let valor1 = parseFloat (document.getElementById("n1").value)
let valor2 = parseFloat(document.getElementById("n2").value)
 let resultado; 
 if(operacao == 'somar'){
    resultado = valor1 + valor2;
 }else if (operacao == 'subtrair'){
    resultado = valor1 - valor2;
 }else if(operacao == 'multiplicar'){
    resultado = valor1 - valor2;
 }else if (operacao == 'dividir'){
    resultado = valor1 / valor2;
 }
 document.getElementById('resultado').
 innerText= 'resultado: ' + resultado
}