let nome = "Paulo";
let idade = "20";
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

let cidade = "Recife";
console.log(`${nome} é de ${cidade}.`);

let num1 = 25;
let num2 = 10;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);

let base = 18;
let altura = 10; 
let area = (base * altura) / 2;
console.log(`A área do triângulo é ${area}.`);

let nota1 = 10;
let nota2 = 6;
let nota3 = 8;
let media = (nota1 + nota2 + nota3) / 3;

console.log(`O resultado da média é ${media}.`);

let precoOriginal = 100;
let Desconto = 20;
let desconto = (precoOriginal * Desconto) / 100;
let precoFinal = precoOriginal - desconto;
console.log(`O valor final do produto com desconto é R$ ${precoFinal.toFixed(2)}`);

let salarioBruto = 4000;
let aliquota1 = 0.15;
let aliquota2 = 0.2;
let aliquota3 = 0.25;
let imposto;
if (salarioBruto <= 3000)
{imposto = salarioBruto * aliquota1;}
else if (salarioBruto <= 4000)
{imposto = salarioBruto * aliquota2;}
else {imposto = salarioBruto * aliquota3;}
console.log(`O imposto de renda a ser pago sobre um salário bruto de R$ ${salarioBruto.toFixed(2)} é R$ ${imposto.toFixed(2)}`);

let valorMoedaInicial = 100;
let taxaCambio = 5.25;
let valorMoedaFinal = valorMoedaInicial * taxaCambio;
console.log(`O valor de R$ ${valorMoedaInicial.toFixed(2)} convertido é R$ ${valorMoedaFinal.toFixed(2)}.`);

let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`A temperatura de ${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(2)}°F.`);

let peso = 72;
let Altura = 1.84;
let imc = peso / (Altura * Altura);
console.log(`O IMC é ${imc.toFixed(2)}.`);
